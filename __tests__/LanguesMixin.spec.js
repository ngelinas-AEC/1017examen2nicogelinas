import { mount } from '@vue/test-utils';
import LanguesMixin from '@/mixins/LanguesMixin';

describe('Tests unitaires pour LanguesMixin', () => {

  // TEST 9 - verifie un titre avec la propriété du composant
  it('configure un titre avec la propriété du composant', () => {
    const Component = {
      render() {},
      title: 'title',
      mixins: [LanguesMixin]
    }
    mount(Component)
    expect(document.title).toBe('title')
  })

  // TEST 10 - vérifie title existe pas
  it('set pas le document.title si la propriété title existe pas', () => {
    document.title = 'title'
    const Component = {
      render() {},
      mixins: [LanguesMixin]
    }
    mount(Component)
    expect(document.title).toBe('title')
  })


  // TEST 11 - vérifie la variable langue = francais
   it('Verification de la variable langue du component LanguesMixin', () => {
    expect(LanguesMixin.langue).toEqual('francais');
  })
})
  
