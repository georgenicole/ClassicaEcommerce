import {
  addDoc,
  collection,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2";


const guardarOrden = (cart, orden) => {
  const batch = writeBatch(db);

  const outOfStock = [];

  cart.forEach((productoEnCart, index) => {
    getDoc(doc(db, "products", productoEnCart.id)).then(
      async (documentSnapshot) => {
        const producto = {
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        };

        if (producto.stock >= productoEnCart.quantity) {
          batch.update(doc(db, "products", producto.id), {
            stock: producto.stock - productoEnCart.quantity,
          });
        } else {
          outOfStock.push(producto);
        }

        if (cart.length - 1 === index) {
          if (outOfStock.length === 0) {
            addDoc(collection(db, "orders"), orden)
              .then(({ id }) => {
                batch.commit().then(() => {
                  Swal.fire("Se ha generado la orden correctamente con id: " + id);
                });
              })
              .catch((err) => {
                Swal.fire(`Error: ${err.message}`);
              });
          } else {
            let mensaje = "";
            for (const producto of outOfStock) {
              mensaje += `${producto.title}`;
            }
            Swal.fire(`Productos fuera de stock: ${mensaje}`);
          }
        }
      }
    );
  });
};

export default guardarOrden;
