import { mount } from '@vue/test-utils';
import Contact from '@/views/Contact';

describe("Tests unitaires pour Contact", () => {

    // TEST 3 - vérifie si l'element input nom exists
    it('At-il un element select dans ce composant?', () => {
        expect(wrapper.find('#nom')).toBe(true);
    })
    <input type="text" name="nom"/>
    // TEST 4 - vérifie si l'element input nom est vide
    it('Vérifie si input nom est vide', () => {
        const wrapper = mount(Contact)
        expect(wrapper.find('#nom').isEmpty()).toBe(true);
    })

    
})