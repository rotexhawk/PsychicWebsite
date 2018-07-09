import { psychicSignupForm } from '../pages/PsychicAdmin/state';
import { searchFrom } from '../pages/Search/state';

export const defaults = {
    ...searchFrom,
    ...psychicSignupForm
};
