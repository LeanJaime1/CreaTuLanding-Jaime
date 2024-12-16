import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js'; 

const getProducts = async () => {
  const productsCollection = collection(db, 'productos'); 
  const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return productsList;
};

export { getProducts };
