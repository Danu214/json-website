import { useEffect, useState } from 'react';

import { Area } from '../../interface';
import { Product } from '../../interface';
import { getAreas, getProducts } from '../../service';

export const FunctionalComponents = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAreas()
      .then(({ data }) => setAreas(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAreaChange = (areaId: number) => {
    const selected = areas.find((area) => area.areaId === areaId);

    if (selected) {
      setSelectedArea(selected);
      loadProductsForArea(selected.areaId);
    }
  };

  const loadProductsForArea = (areaId: number) => {
    getProducts()
      .then(({ data }) => {
        const productsForSelectedArea = data.filter(
          (product) => product.areaId === areaId,
        );
        setProducts(productsForSelectedArea);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className='w-full h-[50px] bg-[#27282D] flex justify-between items-center'>
        <div className='flex justify-around w-full'>
          {areas.map((area) => (
            <li className='text-white list-none' key={area.areaId}>
              <button onClick={() => handleAreaChange(area.areaId)}>
                {area.name}
              </button>
            </li>
          ))}
        </div>
      </div>
      {selectedArea ? (
        <div>
          <h3 className='text-2xl font-bold mt-[50px] mb-4 flex justify-center'>
            {selectedArea.name}
          </h3>
          <div className='grid grid-cols-10 gap-4 mx-[20px] '>
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-4 relative rounded-xl shadow-xl flex items-center justify-center ${
                  product.status === 'open'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                <h4 className='text-lg font-semibold'>{product.sku}</h4>
                <p className='font-semibold absolute right-2 top-0'>
                  {product.defaultSku}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
