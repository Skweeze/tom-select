import TomSelect from './tom-select';

import TomSelect_auto_position from './plugins/auto_position/plugin';
import TomSelect_checkbox_options from './plugins/checkbox_options/plugin';
import TomSelect_collapse_multiple_items from './plugins/collapse_multiple_items/plugin';

TomSelect.define('auto_position', TomSelect_auto_position);
TomSelect.define('checkbox_options', TomSelect_checkbox_options);
TomSelect.define('collapse_multiple_items', TomSelect_collapse_multiple_items);


export default TomSelect;
