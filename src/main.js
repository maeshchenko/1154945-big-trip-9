import {createRouteComponent} from './components/routeComponent';
import {createMenuComponent} from './components/menuComponent';
import {createFilterComponent} from './components/filterComponent';
import {createSortingComponent} from './components/sortingComponent';
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

