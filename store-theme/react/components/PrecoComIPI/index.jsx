import useProduct from 'vtex.product-context/useProduct'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { FormattedCurrency } from 'vtex.format-currency'

import styles from './precocomipi.css';

const API_URL = '_v/ratesandbenefits'

const PrecoComIPI = () => {

  const { product } = useProduct();
  const [calculatedPriceWithTax, setPriceWithTax] = useState(null);
  const [cashPrice, setCashPrice] = useState(0)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const originURL = window.location.origin

    const fullPrice = product?.priceRange.sellingPrice.highPrice;
    const cashPrice = fullPrice - (fullPrice / 100 * 10)

    setCashPrice(cashPrice)

    const fetchData = async () => {
      try {
        const apiEndpoints = [
          `${originURL}/${API_URL}/3d7d788a-e88e-420a-94b4-b05414a42919`,
          `${originURL}/${API_URL}/56e3f05c-725a-4105-868e-20b559ca191a`,
          `${originURL}/${API_URL}/2dc9ff66-4920-4c61-b5e9-01d083b7bae7`,
          `${originURL}/${API_URL}/8e0dbbfa-e440-4260-bc4e-7d5fe2291a8f`
        ];

        // Realizar consultas em paralelo para os 4 endpoints
        const responses = await Promise.all(apiEndpoints.map(endpoint => axios.get(endpoint)));

        // Salvar as informações de cada resposta
        const taxRules = responses.map(response => {
          const { name, percentualTax, collections, isActive } = response.data;
          const collectionId = collections && typeof collections === 'object' && collections[0] && collections[0].id ? collections[0].id : null;

          return {
            name,
            percentualTax,
            collectionId,
            isActive
          };
        });


      // Exibir no console as informações organizadas
      //console.log('Informações das regras de taxa:', taxRules);

      taxRules.forEach(taxRule => {
        const isTaxPresent = product.productClusters.some(cluster => cluster.id === taxRule.collectionId);

        if (isTaxPresent && taxRule.isActive) {
          // Calcular o preço com o adicional da taxa
          const calculatedPriceWithTax = cashPrice * (1 + taxRule.percentualTax / 100);

          // Atualizar o contexto do produto com o novo preço
          setPriceWithTax(calculatedPriceWithTax);

          //console.log(`A taxa de ID "${taxRule.collectionId}" está presente no produto, e o valor que deve ser aplicado é "${taxRule.percentualTax}%".`);
          //console.log(`Preço cheio: ${fullPrice}`);
          // Atualizar o estado local com o novo preço
          setPriceWithTax(calculatedPriceWithTax);

          //console.log('Preço com taxa', calculatedPriceWithTax);
        }
      });

      setIsFetching(false)
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
      setIsFetching(false)
    }
  };

    fetchData();
  }, [product.productClusters]);

  // Se você não precisar renderizar nada, retornar null ou um componente vazio
  return (
    <>
      {calculatedPriceWithTax !== null && !isFetching ? (
        <div className={styles.precoComIPI}>
          <FormattedCurrency value={calculatedPriceWithTax} /><span>{' '}à vista</span>
        </div>
      ) : calculatedPriceWithTax === null && !isFetching && (
        <div className={styles.precoComIPI}>
          <FormattedCurrency value={cashPrice} /><span>{' '}à vista</span>
        </div>
      )}
    </>
  )
};
  
export default PrecoComIPI