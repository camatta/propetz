import React from 'react';

import "./distribuidores.css";

const Distribuidores = () => {


  return (
    <>
      <div className="main-distribuidores">

        <div className="main-title-distribuidores">
          <h1>Nossos Distribuidores</h1>
        </div>
        
        {/* AMAZONAS */}
        <div className="estado-wrapper" data-state="AM">
          <div className="estado-title">
            <h2>Amazonas</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Manaus</h3>
                </div>
                <div className="nome-loja">
                  <h4>Distribuidora GS Pet Store</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Raimunda Marinho, 194, Cond. Agave, Casa 12, Novo Aleixo</p>
                </div>
                <div className="telefone-loja">
                  <p>(92) 8151-6714</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BAHIA */}
        <div className="estado-wrapper" data-state="BA">
          <div className="estado-title">
            <h2>Bahia</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Feira de Santana</h3>
                </div>
                <div className="nome-loja">
                  <h4>QRZ Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Parque Antártica, 330, Bairro Parque Ipê</p>
                </div>
                <div className="telefone-loja">
                  <p>(75) 9229-8665</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Santo Antônio de Jesus </h3>
                </div>
                <div className="nome-loja">
                  <h4>Petshop VIP</h4>
                </div>
                <div className="endereco-loja">
                  <p>Praça Duque de Caxias, 28, Centro</p>
                </div>
                <div className="telefone-loja">
                  <p>(75) 99855-6634</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* DISTRITO FEDERAL */}
        <div className="estado-wrapper" data-state="DF">
          <div className="estado-title">
            <h2>Distrito Federal</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Brasília</h3>
                </div>
                <div className="nome-loja">
                  <h4>Braspet Equipamentos</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Qne 18, 40, Loja 6, Bairro Taguatinga Norte</p>
                </div>
                <div className="telefone-loja">
                  <p>(61) 8517-0622</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Brasília</h3>
                </div>
                <div className="nome-loja">
                  <h4>Império Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Colônia Agrícola 26 de Setembro - R. 1 CH 3A, Taguatinga</p>
                </div>
                <div className="telefone-loja">
                  <p>(61) 99832-3880</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Brasília</h3>
                </div>
                <div className="nome-loja">
                  <h4>Petstop Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Qd. CLN 105, 17, Bloco B, Bairro Ada Norte</p>
                </div>
                <div className="telefone-loja">
                  <p>(61) 98450-2807</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* ESPÍRITO SANTO */}
        <div className="estado-wrapper" data-state="ES">
          <div className="estado-title">
            <h2>Espírito Santo</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Cachoeira do Itapemirim</h3>
                </div>
                <div className="nome-loja">
                  <h4>Pet Amicat</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Walter dos Santos Paiva, 58, Dr. Luiz Tinoco da Fonseca</p>
                </div>
                <div className="telefone-loja">
                  <p>(27) 99752-3115</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* GOIÁS */}
        <div className="estado-wrapper" data-state="GO">
          <div className="estado-title">
            <h2>Goías</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Anápolis</h3>
                </div>
                <div className="nome-loja">
                  <h4>White Pet Artigos de Animais</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. JM-059, S/N, Qd. 89, Lt. 31, Loja 02 - 1º Andar</p>
                </div>
                <div className="telefone-loja">
                  <p>(62) 9336-3749</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Goiânia</h3>
                </div>
                <div className="nome-loja">
                  <h4>Centro Oeste Distribuidora Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Padre Monte, 1065, Qd. 12, Lt. 10, Bairro Goiá</p>
                </div>
                <div className="telefone-loja">
                  <p>(62) 3286-4967</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Goiânia</h3>
                </div>
                <div className="nome-loja">
                  <h4>Wesley Lopes Distribuidora Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Perimetral Norte, 387, Qd. 21, Lt. 20, Setor Cândida de Morais</p>
                </div>
                <div className="telefone-loja">
                  <p>(62) 98154-4928</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* MINAS GERAIS */}
        <div className="estado-wrapper" data-state="MG">
          <div className="estado-title">
            <h2>Minas Gerais</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Belo Horizonte</h3>
                </div>
                <div className="nome-loja">
                  <h4>Lima Guias e Acessórios</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Expedicionário Sebastião Pires, 59, Casa B, Itatiaia</p>
                </div>
                <div className="telefone-loja">
                  <p>(31) 98117-9819</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Belo Horizonte</h3>
                </div>
                <div className="nome-loja">
                  <h4>Vetmix  Comércio de Produtos Veterinários Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Padre Eustáquio, 2723 SLJ, Bairro Padre Eustáquio</p>
                </div>
                <div className="telefone-loja">
                  <p>(31) 3273-6679</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* MATO GROSSO */}
        <div className="estado-wrapper" data-state="MT">
          <div className="estado-title">
            <h2>Mato Grosso</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Sorriso</h3>
                </div>
                <div className="nome-loja">
                  <h4>Rafael Wolf Essência Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Roberto Carlos Braga, 461 B, Bairro Centro Sul</p>
                </div>
                <div className="telefone-loja">
                  <p>(66) 9711-8238</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PARÁ */}
        <div className="estado-wrapper" data-state="PA">
          <div className="estado-title">
            <h2>Pará</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Belém</h3>
                </div>
                <div className="nome-loja">
                  <h4>Léo Afiações</h4>
                </div>
                <div className="endereco-loja">
                  <p>Tv. Dom Romualdo de Seixas, 1942, Nazaré</p>
                </div>
                <div className="telefone-loja">
                  <p>(91) 99237-8483</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PARAÍBA */}
        <div className="estado-wrapper" data-state="PB">
          <div className="estado-title">
            <h2>Paraíba</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>João Pessoa</h3>
                </div>
                <div className="nome-loja">
                  <h4>Equipet Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Amazonas, 780, Bairro dos Estados</p>
                </div>
                <div className="telefone-loja">
                  <p>(83) 98828-4465</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PARANÁ */}
        <div className="estado-wrapper" data-state="PR">
          <div className="estado-title">
            <h2>Paraná</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Campo Largo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Josiely Do Nascimento Xavier</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Ubaldo Bonato, 192, Jardim Céu Azul.</p>
                </div>
                <div className="telefone-loja">
                  <p>(41) 99184-7200</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* RIO DE JANEIRO */}
        <div className="estado-wrapper" data-state="RJ">
          <div className="estado-title">
            <h2>Rio de Janeiro</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Nilópolis</h3>
                </div>
                <div className="nome-loja">
                  <h4>VIP Pet Shop Comércio Atacadista e Varejista</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. João Pessoa, 1816, Qd. 3, Lt. 276, Centro</p>
                </div>
                <div className="telefone-loja">
                  <p>(21) 2668-1735</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Petrópolis</h3>
                </div>
                <div className="nome-loja">
                  <h4>Adriana Haubrich de Fari</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Dr. Paulo Hervé, 557, Bingen</p>
                </div>
                <div className="telefone-loja">
                  <p>(24) 99225-5923</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Rio de Janeiro</h3>
                </div>
                <div className="nome-loja">
                  <h4>Swift Sttallyon Comércio Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Vicente de Carvalho, 162, Vaz Lobo</p>
                </div>
                <div className="telefone-loja">
                  <p>(21) 3391-2166</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São Gonçalo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Vetsam Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Bernardo Fontenelle, 386, Bairro Rio do Ouro</p>
                </div>
                <div className="telefone-loja">
                  <p>(21) 99846-3659</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Volta Redonda</h3>
                </div>
                <div className="nome-loja">
                  <h4>Vitavet Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Grande Oriente, 583, Compl. 01 e 02, Belmonte</p>
                </div>
                <div className="telefone-loja">
                  <p>(24) 3347-3255</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* RIO GRANDE DO NORTE */}
        <div className="estado-wrapper" data-state="RN">
          <div className="estado-title">
            <h2>Rio Grande do Norte</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Mossoró</h3>
                </div>
                <div className="nome-loja">
                  <h4>Animais Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Rodrigues Alves, 820, Sala 1, Santo Antônio</p>
                </div>
                <div className="telefone-loja">
                  <p>(84) 98846-0453</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* RONDÔNIA */}
        <div className="estado-wrapper" data-state="RO">
          <div className="estado-title">
            <h2>Rondônia</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Ji-Paraná</h3>
                </div>
                <div className="nome-loja">
                  <h4>Super Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Lirio Possamai, 536, Jd. Cristóvão</p>
                </div>
                <div className="telefone-loja">
                  <p>(69) 9316-9245</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Porto Velho</h3>
                </div>
                <div className="nome-loja">
                  <h4>Ara Distribuição de Acessórios</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Rio Negro, 63, Cond. Acarai 2, Aponiã</p>
                </div>
                <div className="telefone-loja">
                  <p>(69) 9956-8080</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* RIO GRANDE DO SUL */}
        <div className="estado-wrapper" data-state="RS">
          <div className="estado-title">
            <h2>Rio Grande do Sul</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Cachoeirinha</h3>
                </div>
                <div className="nome-loja">
                  <h4>Bio Sul Comércio de Produtos A</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Cai, 610, Vila Princesa Izabel</p>
                </div>
                <div className="telefone-loja">
                  <p>(51) 3041-5059</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Caxias do Sul</h3>
                </div>
                <div className="nome-loja">
                  <h4>Sul Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Cubilai Schio 617, Nossa Senhora da Saúde</p>
                </div>
                <div className="telefone-loja">
                  <p>(54) 9686-2405</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Estrela</h3>
                </div>
                <div className="nome-loja">
                  <h4>Distribuidora Zanella</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Cruzeiro do Sul, 1211, Industriais</p>
                </div>
                <div className="telefone-loja">
                  <p>(51) 3712-1420</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Porto Alegre</h3>
                </div>
                <div className="nome-loja">
                  <h4>Importadora Bagé S/A</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Almirante Tamandaré, 566, Casa, Bairro Floresta</p>
                </div>
                <div className="telefone-loja">
                  <p>(51) 2117-4558</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Porto Alegre</h3>
                </div>
                <div className="nome-loja">
                  <h4>LCN Comércio e Revenda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Vicente Ferreira Gomes, 577, Sarandi</p>
                </div>
                <div className="telefone-loja">
                  <p>(51) 3557-9379</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Santo Ângelo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Kuffal Distribuidora Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Jorge Menezes, 119, Sala 1, Menezes</p>
                </div>
                <div className="telefone-loja">
                  <p>(55) 9961-2442</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Sapiranga</h3>
                </div>
                <div className="nome-loja">
                  <h4>Hupernikao Industria e Comércio de Artigos Para Animais Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Carmem Miranda, 1164, Bairro Centenário</p>
                </div>
                <div className="telefone-loja">
                  <p>(51) 3039-0202</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* SANTA CATARINA */}
        <div className="estado-wrapper" data-state="SC">
          <div className="estado-title">
            <h2>Santa Catarina</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Concordia</h3>
                </div>
                <div className="nome-loja">
                  <h4>Maria Liz Industria e Comércio de Vestuário e Bijuterias Eireli</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Uirapurus, 108, Vila Jacob Biezus</p>
                </div>
                <div className="telefone-loja">
                  <p>(49) 8803-9048</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Itajaí</h3>
                </div>
                <div className="nome-loja">
                  <h4>Tokas Comércio Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. José Gall, 1115 , Galpão 7, Carvalho</p>
                </div>
                <div className="telefone-loja">
                  <p>(47) 3348-2919</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Itajaí</h3>
                </div>
                <div className="nome-loja">
                  <h4>Unik Comércio Digital Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. José Gall, 115, Galpão 07 - Sala 02, Carvalho </p>
                </div>
                <div className="telefone-loja">
                  <p>(47) 9653-5223</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Itajaí</h3>
                </div>
                <div className="nome-loja">
                  <h4>V8 Pet Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Antônio Carlos Pereira Leão Filho, 150, São Vicente</p>
                </div>
                <div className="telefone-loja">
                  <p>(47) 9198-6001</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São José</h3>
                </div>
                <div className="nome-loja">
                  <h4>Junk Pet Distribuidora Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Padre Raulino Reitz, 201, Serraria</p>
                </div>
                <div className="telefone-loja">
                  <p>(48) 9835-0225</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Timbó</h3>
                </div>
                <div className="nome-loja">
                  <h4>Waldecir Silva Consulting</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Paraguai, 443, Imigrantes</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 7501-5253</p>
                </div>
              </li>


            </ul>
          </div>
        </div>

        {/* SERGIPE */}
        <div className="estado-wrapper" data-state="SE">
          <div className="estado-title">
            <h2>Sergipe</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Aracaju</h3>
                </div>
                <div className="nome-loja">
                  <h4>Super Fofos Pet Shop Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Luiz Chagas, 96, Atalaia</p>
                </div>
                <div className="telefone-loja">
                  <p>(79) 99854-3561</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Aracaju</h3>
                </div>
                <div className="nome-loja">
                  <h4>WG Tosas</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Simeão Sobral, 859, Santo Antônio</p>
                </div>
                <div className="telefone-loja">
                  <p>(79) 99868-2244</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* SÃO PAULO */}
        <div className="estado-wrapper" data-state="SP">
          <div className="estado-title">
            <h2>São Paulo</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Campinas</h3>
                </div>
                <div className="nome-loja">
                  <h4>Soropet Campinas Comércio de Equipamentos Para Banho e Tosa</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Orozimbo Maia, 1505, Cambui</p>
                </div>
                <div className="telefone-loja">
                  <p>(19) 3235-2694</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Guaratinguetá</h3>
                </div>
                <div className="nome-loja">
                  <h4>Warlei Rodrigues Teles Rações</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Filadelfo Santos Reis, 300, Vila dos Comerciários</p>
                </div>
                <div className="telefone-loja">
                  <p>(12) 98702-4097</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Guarulhos</h3>
                </div>
                <div className="nome-loja">
                  <h4>Maxtrato Comércio de Produtos Veterinários Eireli</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Indubel, 461, Galpão 02, Vila Aeroporto</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 3019-1377</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Mogi das Cruzes</h3>
                </div>
                <div className="nome-loja">
                  <h4>Caroline Tarra Muniz</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Anita Garibaldi, 275, Vila Nova Cintra</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 97162-9191</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Piracicaba</h3>
                </div>
                <div className="nome-loja">
                  <h4>Roberto Alberoni Filho 21634419898</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Dr. Morat, 633, Vila Rezande</p>
                </div>
                <div className="telefone-loja">
                  <p>(19) 98241-6374</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São José do Rio Preto</h3>
                </div>
                <div className="nome-loja">
                  <h4>Maqlam Comércio e Manutenção de Equipamentos Para Pet Shop Ltda-Me</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Jorge Tibiriçá, 2425, Pq. Industrial</p>
                </div>
                <div className="telefone-loja">
                  <p>(17) 3212-7793</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São José do Rio Preto</h3>
                </div>
                <div className="nome-loja">
                  <h4>Márcio Leandro Vercant da Silva</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. José Rubio, 061, Parque Juriti</p>
                </div>
                <div className="telefone-loja">
                  <p>(17) 99102-2516</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São José dos Campos</h3>
                </div>
                <div className="nome-loja">
                  <h4>Pet Shop Cia Fauna</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Ironman Victor Garrido, 681, Urbanova</p>
                </div>
                <div className="telefone-loja">
                  <p>(12) 97412-3227</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São Paulo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Antônio Carlos Batista Comércio Em Geral Ltda</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Eca de Queiroz, 720, Apt. 401, Prédio no Final da Rua, Vila Mariana</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 97958-6455</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São Paulo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Hard Wind</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. São Celso, 252, Casa 02 SLJ, Vila Domitilia</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 96185-9920</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São Paulo</h3>
                </div>
                <div className="nome-loja">
                  <h4>K9 Distribuidora Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Torre Azul, 119, Vila São Nicolau</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 99632-3101</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São Paulo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Marcelaços</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Júlio Macedo, 337, Jd. Santa Maria</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 99705-7440</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </>
  )
}
  
export default Distribuidores