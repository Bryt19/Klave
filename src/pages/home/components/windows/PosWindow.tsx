import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Drug = { id: string; name: string; strength: string; price: number };

const catalog: Drug[] = [
  { id: "1", name: "Paracetamol", strength: "500mg", price: 8 },
  { id: "2", name: "Amoxicillin", strength: "250mg", price: 24 },
  { id: "3", name: "ORS Sachet", strength: "20.5g", price: 5 },
];

export default function PosWindow() {
  const [cart, setCart] = useState<{ drug: Drug; qty: number }[]>([]);

  const addToCart = (drug: Drug) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.drug.id === drug.id);
      if (existing) {
        return prev.map((item) =>
          item.drug.id === drug.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { drug, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.drug.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.drug.price * item.qty, 0);

  return (
    <div className="flex flex-col md:flex-row gap-4 h-full">
      {/* Catalog */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
            Catalogue
          </h4>
          <span className="text-[10px] text-foreground-600">In stock</span>
        </div>
        <div className="space-y-2">
          {catalog.map((drug) => (
            <div
              key={drug.id}
              className="flex items-center justify-between p-3 rounded-lg border border-background-200/20 bg-background-50/60"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-md bg-primary-500/15 flex items-center justify-center">
                  <i className="ri-capsule-line text-primary-400 text-sm" />
                </span>
                <div>
                  <p className="text-sm text-foreground-100 font-medium">
                    {drug.name}
                  </p>
                  <p className="text-[10px] text-foreground-600">
                    {drug.strength} · GH₵{drug.price}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => addToCart(drug)}
                className="px-2.5 py-1 text-[11px] font-medium bg-primary-500/15 text-primary-300 rounded-md hover:bg-primary-500 hover:text-background-50 transition-colors whitespace-nowrap"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div className="flex-1 border-t md:border-t-0 md:border-l border-background-200/15 md:pl-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-semibold text-foreground-300 uppercase tracking-wider">
            Current Sale
          </h4>
          <span className="text-[10px] text-foreground-600">
            {cart.reduce((s, i) => s + i.qty, 0)} items
          </span>
        </div>

        <div className="min-h-[120px]">
          <AnimatePresence>
            {cart.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 border border-dashed border-background-200/20 rounded-lg"
              >
                <i className="ri-shopping-cart-line text-foreground-700 text-xl mb-2 block" />
                <p className="text-[11px] text-foreground-600">
                  Cart is empty
                </p>
              </motion.div>
            ) : (
              cart.map((item) => (
                <motion.div
                  key={item.drug.id}
                  layout
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-between py-2 border-b border-background-200/10"
                >
                  <div>
                    <p className="text-xs text-foreground-100 font-medium">
                      {item.drug.name}
                    </p>
                    <p className="text-[10px] text-foreground-600">
                      GH₵{item.drug.price} × {item.qty}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-foreground-300 font-semibold">
                      GH₵{item.drug.price * item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.drug.id)}
                      className="w-5 h-5 flex items-center justify-center text-foreground-600 hover:text-secondary-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <i className="ri-subtract-line text-xs" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-foreground-600">Total</span>
          <motion.span
            key={total}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            className="text-base font-semibold text-primary-400"
          >
            GH₵{total}
          </motion.span>
        </div>
        <button
          type="button"
          className="mt-3 w-full py-2 text-xs font-semibold bg-primary-500 text-background-50 rounded-md hover:bg-primary-400 transition-colors whitespace-nowrap"
        >
          Complete Sale
        </button>
      </div>
    </div>
  );
}