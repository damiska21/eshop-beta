// CartToast.js
import { useEffect } from "react";
import { Toast } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

let toastInstance = null;

export function showCartToast() {
  const toastEl = document.getElementById("cart-toast");

  if (!toastEl) return;

  if (!toastInstance) {
    toastInstance = new Toast(toastEl);
  }

  toastInstance.show();
}

export function CartToast() {
  useEffect(() => {
    const toastEl = document.getElementById("cart-toast");
    if (toastEl) {
      toastInstance = new Toast(toastEl, { delay: 3000 });
    }
  }, []);

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      <div
        id="cart-toast"
        className="toast align-items-center text-white bg-success border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">🛒 Přidáno do košíku!</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}
