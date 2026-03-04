'use client'
import { usePathname, useRouter } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';

const CartBtn = ({product}) => {
    console.log(product);
    const isLogin=false;
    const router=useRouter()
    const path=usePathname()
    const handleAddToCart=()=>{
        if(isLogin){
            alert(product._id+" added to cart");
        }
        else{
            router.push(`/login?callback=${path}`)
        }
    }
    return (
        <div>
            <button onClick={handleAddToCart} className="btn btn-primary gap-2">
                        <FaShoppingCart />
                        Add to Cart
                      </button>
        </div>
    );
};

export default CartBtn;