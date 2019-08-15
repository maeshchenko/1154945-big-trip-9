import {createRouteComponent} from './components/RouteComponent';
import {createMenuComponent} from './components/MenuComponent';
import {createFilterComponent} from './components/FilterComponent';
import {createSortingComponent} from './components/SortingComponent';
import {createTripsBoardComponent} from './components/TripsBoardComponent';
import {createTripDayComponent} from './components/TripDayComponent';
import {createTripItemComponent} from './components/TripItemComponent';
import {createEditTripItemComponent} from "./components/EditTripItemComponent";

const render = (container, component, position) => {
  return container.insertAdjacentHTML(position, component);
};

const tripInfo = document.querySelector('.trip-info');
render(tripInfo, createRouteComponent(), 'afterbegin');

const tripControls = document.querySelector('.trip-controls');
render(tripControls, createMenuComponent(), 'afterbegin');
render(tripControls, createFilterComponent(), 'beforeend');

const tripEvents = document.querySelector('.trip-events');
render(tripEvents, createSortingComponent(), 'beforeend');
render(tripEvents, createTripsBoardComponent(), 'beforeend');

const tripDays = document.querySelector(".trip-days");
render(tripDays, createTripDayComponent(), 'beforeend');

const day = document.querySelector(".trip-events__list");
render(day, createEditTripItemComponent(), 'beforeend');
for (let i = 0; i<3; i++) {
  render(day, createTripItemComponent(), 'beforeend');
}

