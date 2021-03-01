import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer';

describe('Tests unitaires pour Footer', () => {

    // TEST 5 - Verifie si le div du footer est valide 
    it('Vérifier si balise div du Footer est valide', () => {
        const wrapper = shallowMount(Footer)
        expect(wrapper.find('div').text()).toEqual("Copyright © Nico Gelinas - 2021 All right reserved - LICENSE MIT");
      })

})