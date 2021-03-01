import { mount } from '@vue/test-utils';
import Accueil from '@/views/Accueil';

describe("Tests unitaires pour Accueil", () => {

    // TEST 1 - verifie si Accueil est une instance de Vue
    it('Vérifier si Accueil est une instance de vue', () => {
        const wrapper = mount(Accueil)
        expect(wrapper.exists()).toBe(true);
    })

    // TEST 2 - vérifie la variable name = profile
    it('Verification du nom du component Accueil', () => {
        expect(Accueil.name).toEqual('profile');
    })

})