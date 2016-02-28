import {Observable} from 'rxjs/Observable';
import '../rx-imports';

function search(term = '') {
    term = term.toLocaleLowerCase();
    return Observable.ajax.getJSON('/node_modules/corpora/data/humans/scientists.json')
        .delay(2000)
        .map(data => data.scientists.filter(name => name.toLocaleLowerCase().includes(term)))
        .filter(data => data.length)
        .defaultIfEmpty(['Not found']);
}

const inputChanged = Observable.fromEvent(document.getElementById('typeahead'), 'input')
    .map(ev => ev.target.value)
    .filter(text => text.length > 2)
    .debounceTime(500)
    .distinctUntilChanged();

const searcher = inputChanged
    .flatMap(query => search(query))
    .map(data => data.slice(0, 5));

searcher.subscribe(results => {
    const ul = document.getElementById('results');
    ul.innerHTML = results.map(it => `<li>${it}</li>`)
                          .join('');
});
