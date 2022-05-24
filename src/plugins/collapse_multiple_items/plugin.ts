import TomSelect from '../../tom-select';
import {
	setAttr,
} from '../../vanilla';

export default function(this:TomSelect) {
	const self = this;

    const updatePlaceholder = () => {
        if (self.settings.mode !== 'multi') return;

        const collapsedItemsTemplate = self.settings.collapsedItemsTemplate ? self.settings.collapsedItemsTemplate : '# Selected';
        let placeholder = self.settings.placeholder;
        if(self.items.length === 1) {
            const value = self.getValue();
            const option = self.getOption(value[0]);
            placeholder = option?.textContent ? option.textContent : '';
        }
        if(self.items.length > 1) placeholder = collapsedItemsTemplate.replace('#', self.items.length.toString());
        setAttr(self.control_input,{placeholder: placeholder});
    }

    self.hook('after','inputState',() => {
        updatePlaceholder();
    })

    self.hook('after','setup',() => {
        updatePlaceholder();
    })
}