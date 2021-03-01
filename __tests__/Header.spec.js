import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header';

describe('Tests unitaires pour Header', () => {

    // TEST 6 - Verifie si router-link existe
    it('Vérifier si router-link existe', () => {
        const wrapper = shallowMount(Header);
        const router = wrapper.find('router-link');
        expect(router.exists()).toBe(true);
      })

    // TEST 7 - Verifie si le array menu existe
    it('Vérifier si le array menu existe', () => {
        const wrapper = shallowMount(Header, {
            data() {
                return {
                    menu: [
                        {id:1, name: 'accueil'},
                        {id:2, name: 'projet'},
                        {id:3, name: 'contact'},
                        {id:4, name: 'apropos'}
                  ]
                }
            }
        })      
        expect(wrapper.exists()).toBe(true);
      })

})