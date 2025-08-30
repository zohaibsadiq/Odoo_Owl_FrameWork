import { registry } from '@web/core/registry';
import { reactive } from '@odoo/owl';

const sharedStateService = {
  start(env) {
    const state = reactive({}); // <-- reactive so UI updates

    return {
      state,
      getValue(key) {
        return state[key];
      },
      setValue(key, value) {
        state[key] = value;
      },
    };
  },
};

registry.category('services').add('shared_state', sharedStateService);
