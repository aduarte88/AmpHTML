// src/polyfills.js must be the first import.
import '#3p/polyfills';

import {register} from '#3p/3p';
import {draw3p, init} from '#3p/integration-lib';

import {forkmedia} from '#ads/vendors/forkmedia';

init(window);
register('forkmedia', forkmedia);

window.draw3p = draw3p;
