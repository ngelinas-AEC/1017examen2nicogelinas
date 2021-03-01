import { shallowMount } from '@vue/test-utils';
import Projet from '@/views/Projet';

describe('Tests unitaires pour Projet', () => {

    // TEST 12  -  Verifie les noms de la liste
    it('Projet', () => {
        const wrapper = shallowMount(Projet)
        const sectionArray = wrapper.findAll('section')

        expect(sectionArray.contains('portfolio')).toBe(true)
        expect(sectionArray.contains('lecteurdenouvelles')).toBe(true)
        expect(sectionArray.contains('appvoyage')).toBe(true)
        expect(sectionArray.contains('appvue')).toBe(true)
    })
        
})