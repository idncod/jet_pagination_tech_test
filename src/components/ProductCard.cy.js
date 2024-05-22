import ProductCard from './ProductCard.vue'

describe('<ProductCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ProductCard)
  })
})