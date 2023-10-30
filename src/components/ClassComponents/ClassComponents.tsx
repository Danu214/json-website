import { Component } from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { getAreas, getProducts } from '../../service';
import { Area, Product, ReduxState } from '../../interface';
import allActions from '../../actions';

class ClassHeaderPage extends Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  componentDidMount() {
    const { areasActions } = this.props;
    getAreas()
      .then(({ data }) => areasActions.setAreas(data))
      .catch((error) => console.error(error));
  }

  handleAreaChange = (areaId: number) => {
    const { areas, selectedAreaActions } = this.props;
    const selected = areas.find(
      (area: { areaId: number }) => area.areaId === areaId,
    );

    if (selected) {
      selectedAreaActions.setSelectedArea(selected);
      this.loadProductsForArea(selected.areaId);
    }
  };

  loadProductsForArea = (areaId: number) => {
    const { productsActions } = this.props;
    getProducts()
      .then(({ data }) => {
        const productsForSelectedArea = data.filter(
          (product) => product.areaId === areaId,
        );
        productsActions.setProducts(productsForSelectedArea);
      })
      .catch((error) => console.error(error));
  };

  render() {
    const { areas, selectedArea, products } = this.props;

    return (
      <div>
        <div className='w-full h-[50px] bg-[#27282D] flex justify-between items-center'>
          <div className='flex w-full justify-around'>
            {areas.map((area: Area) => (
              <li className='text-white list-none' key={area.areaId}>
                <button onClick={() => this.handleAreaChange(area.areaId)}>
                  {area.name}
                </button>
              </li>
            ))}
          </div>
        </div>
        {selectedArea ? (
          <div>
            <h3 className='text-2xl mt-[50px] font-bold flex justify-center'>
              {selectedArea.name}
            </h3>
            <div className='grid grid-cols-10 gap-4 mx-[20px] '>
              {products.map((product: Product) => (
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
  }
}

function mapStateToProps(state: ReduxState) {
  const { areas, selectedArea, products } = state;
  return {
    areas,
    selectedArea,
    products,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  const { areasActions, selectedAreaActions, productsActions } = allActions;
  return {
    areasActions: {
      setAreas: (e: Area[]) => dispatch(areasActions.setAreas(e)),
      clearAreas: () => dispatch(areasActions.clearAreas()),
    },
    selectedAreaActions: {
      setSelectedArea: (e: Area) =>
        dispatch(selectedAreaActions.setSelectedArea(e)),
      clearSelectedArea: () =>
        dispatch(selectedAreaActions.clearSelectedArea()),
    },
    productsActions: {
      setProducts: (e: Product[]) => dispatch(productsActions.setProducts(e)),
      clearProducts: () => dispatch(productsActions.clearProducts()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassHeaderPage);
