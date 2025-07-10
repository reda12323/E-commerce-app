import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { removeFromCart } from '../redux/cartSlice'; // adjust path as needed
import './panier.css';

const Panier = () => {
  const [open, setOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [quantities, setQuantities] = useState({}); // local quantity input per item

  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProductsData(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      }
    };
    fetchProducts();
  }, []);

  // Initialize quantities when items change
  useEffect(() => {
    const initQuantities = {};
    items.forEach(item => {
      initQuantities[item.id] = item.quantity;
    });
    setQuantities(initQuantities);
  }, [items]);

  const getProductDetails = (id) => {
    return productsData.find((product) => product._id === id || product.id === id);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, value) => {
    const val = Math.max(1, Number(value)); // minimum 1
    setQuantities((prev) => ({ ...prev, [id]: val }));
  };

  const handleBuy = async () => {
    try {
      const purchaseItems = items.map(item => ({
        id: item.id,
        quantity: quantities[item.id] || item.quantity,
      }));

      const response = await axios.post('http://localhost:5000/api/products/purchase', {
        items: purchaseItems,
      });

      alert('Purchase successful!');
    } catch (error) {
      alert('Purchase failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className='panier-container'>
      <div
        className='flex contenu-shopping-cart'
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <div className='flex'>
          <span className='icon-shopping-cart'></span>
          <span className='lenght-shopping-cart'>{totalQuantity}</span>
        </div>
        <div className='cart-price'>
          <p id='cart'>My Cart</p>
          <p id='price'>{totalPrice.toFixed(2)} DHS</p>
        </div>
      </div>

      {open && (
        <div className='cart-dropdown'>
          <h4 style={{ marginBottom: '10px' }}>Panier</h4>
          <div className='cart-items'>
            {items.length === 0 ? (
              <p>Votre panier est vide.</p>
            ) : (
              items.map((item) => {
                const product = getProductDetails(item.id);
                if (!product) return null;

                return (
                  <div key={item.id} className='cart-item'>
                    <img
                      src={product.img || product.image || '/fallback.jpg'}
                      alt={product.title || product.name}
                      className='cart-item-image'
                    />
                    <div className='cart-item-details'>
                      <span className='cart-item-name'>
                        {(product.title || product.name)?.slice(0, 25)}...
                      </span>
                      <input
                        type="text"
                        min="1"
                        value={quantities[item.id] || item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="quantity-input" readOnly
                      />
                      <span className='cart-item-price'>
                        {(item.price * (quantities[item.id] || item.quantity)).toFixed(2)} DHS
                      </span>
                    </div>
                    <button
                      className='remove-button'
                      onClick={() => handleRemove(item.id)}
                      title='Remove item'
                    >
                      ×
                    </button>
                  </div>
                );
              })
            )}
          </div>
          <div className='cart-footer' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className='buy-button' onClick={handleBuy}>Buy</button>
            <strong>Total: {totalPrice.toFixed(2)} DHS</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
