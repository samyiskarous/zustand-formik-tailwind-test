import create from 'zustand'

const useStore = create(set => ({
    user: {
        id: 12,
        name: 'Samy George',
    },
    cart: [],
    addOrderToCart: (order, quantity) => {
        set(state => ({cart: [...state.cart, {order, quantity}] }))
    }
}));

export default useStore;