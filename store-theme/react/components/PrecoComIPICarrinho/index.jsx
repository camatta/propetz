import { useEffect, useState } from 'react';
import axios from 'axios';
import { OrderForm } from 'vtex.order-manager';

import './precocomipicarrinho.css';

const SKU_API_URL = '_v/catalogsku'
const TAX_API_URL = '_v/ratesandbenefits'

const PrecoComIPICarrinho = () => {
  const { useOrderForm } = OrderForm;
  const orderFormContext = useOrderForm();
  //console.log('orderFormContext', orderFormContext)
  const [hasExecuted, setHasExecuted] = useState(false);

  useEffect(() => {
    const originURL = 'https://propetz.myvtex.com'

    const fetchData = async () => {
      try {
        if (orderFormContext && orderFormContext.orderForm && orderFormContext.orderForm.items && !hasExecuted) {
          const itemIds = orderFormContext.orderForm.items.map(item => item.id);
          //console.log('Ids dos items:', itemIds);

          // Para cada ID de produto no carrinho, acessar a API
          await Promise.all(itemIds.map(async itemId => {
            try {
              const skuResponse = await axios.get(`${originURL}/${SKU_API_URL}/${itemId}`);

              const { ProductClustersIds } = skuResponse.data;

              // Verificar se ProductClustersIds não é nulo
              if (ProductClustersIds !== null) {
                //console.log(`ProductClustersIds para o item ${itemId}:`, ProductClustersIds);

                // Verificar se contém as opções específicas
                if (ProductClustersIds.includes('159') || ProductClustersIds.includes('160') || ProductClustersIds.includes('161') || ProductClustersIds.includes('162')) {
                  // Para cada opção, acessar a API correspondente
                  const percentualTaxPromises = [];

                  if (ProductClustersIds.includes('159')) {
                    percentualTaxPromises.push(axios.get(`${originURL}/${TAX_API_URL}/3d7d788a-e88e-420a-94b4-b05414a42919`));
                  }

                  if (ProductClustersIds.includes('160')) {
                    percentualTaxPromises.push(axios.get(`${originURL}/${TAX_API_URL}/56e3f05c-725a-4105-868e-20b559ca191a`));
                  }

                  if (ProductClustersIds.includes('161')) {
                    percentualTaxPromises.push(axios.get(`${originURL}/${TAX_API_URL}/2dc9ff66-4920-4c61-b5e9-01d083b7bae7`));
                  }

                  if (ProductClustersIds.includes('162')) {
                    percentualTaxPromises.push(axios.get(`${originURL}/${TAX_API_URL}/8e0dbbfa-e440-4260-bc4e-7d5fe2291a8f`));
                  }

                  // Aguardar todas as promessas serem resolvidas
                  const percentualTaxResponses = await Promise.all(percentualTaxPromises);

                  // Para cada resposta, calcular o novo preço e atualizar o OrderForm
                  percentualTaxResponses.forEach(response => {
                    if(response.data.isActive) {
                      const percentualTax = response.data.percentualTax;

                      // Encontrar o item correspondente no OrderForm
                      const updatedItems = orderFormContext.orderForm.items.map(item => {
                        if (item.id === itemId) {
                          // Calcular o novo preço
                          const newPrice = item.price + (item.price * percentualTax / 100);

                          // Atualizar o preço no item
                          return {
                            ...item,
                            listPrice: newPrice,
                          };
                        }

                        return item;
                      });

                      // Atualizar o OrderForm com os itens atualizados
                      orderFormContext.setOrderForm({
                        items: updatedItems,
                      });
                    }
                  });

                  // Definir que o código já foi executado
                  setHasExecuted(true);
                }
              }
            } catch (error) {
              console.error(`Erro ao obter dados da API para o item ${itemId}:`, error);
            }
          }));
        }
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, [orderFormContext.orderForm.items, hasExecuted]); // Adicionei a dependência aqui para garantir que o useEffect seja acionado apenas quando os itens mudarem ou o código ainda não foi executado

  return null;
};

export default PrecoComIPICarrinho;
