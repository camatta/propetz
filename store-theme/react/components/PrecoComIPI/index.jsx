import useProduct from 'vtex.product-context/useProduct'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { FormattedCurrency } from 'vtex.format-currency'

import './precocomipi.css';

const API_URL = '_v/ratesandbenefits'

const PrecoComIPI = () => {

  const { product } = useProduct();
  const [calculatedPriceWithTax, setPriceWithTax] = useState(null);

  useEffect(() => {
    const originURL = 'https://propetz.myvtex.com'

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
          const { name, percentualTax, collections } = response.data;
          const collectionId = collections && typeof collections === 'object' && collections[0] && collections[0].id ? collections[0].id : null;

          return {
            name,
            percentualTax,
            collectionId
          };
        });


      // Exibir no console as informações organizadas
      //console.log('Informações das regras de taxa:', taxRules);


      taxRules.forEach(taxRule => {
        const isTaxPresent = product.productClusters.some(cluster => cluster.id === taxRule.collectionId);

        if (isTaxPresent) {
          const fullPrice = product?.priceRange.sellingPrice.highPrice;
          // Calcular o preço com o adicional da taxa
          const calculatedPriceWithTax = fullPrice * (1 + taxRule.percentualTax / 100);

          // Atualizar o contexto do produto com o novo preço
          setPriceWithTax(calculatedPriceWithTax);

          //console.log(`A taxa de ID "${taxRule.collectionId}" está presente no produto, e o valor que deve ser aplicado é "${taxRule.percentualTax}%".`);
          //console.log(`Preço cheio: ${fullPrice}`);
          // Atualizar o estado local com o novo preço
          setPriceWithTax(calculatedPriceWithTax);

          //console.log('Preço com taxa', calculatedPriceWithTax);
        }
      });
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  };

    fetchData();
  }, [product.productClusters]);

  // Se você não precisar renderizar nada, retornar null ou um componente vazio
  return (
    <div>
      {calculatedPriceWithTax !== null && (
        <div className="precoComIPI"><FormattedCurrency value={calculatedPriceWithTax} /><span className="precoAvista"> preço com IPI</span></div>
      )}
    </div>
  )
};
  
export default PrecoComIPI