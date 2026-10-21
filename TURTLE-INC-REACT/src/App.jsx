import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Páginas Principales y Navegación
import Inicio from './pages/Inicio';
import Index from './pages/Index';
import UltimosDrops from './pages/UltimosDrops';
import Prendas from './pages/Prendas';
import PrendasMasculinas from './pages/PrendasMasculinas';
import PrendasFemeninas from './pages/PrendasFemeninas';
import Caparazones from './pages/Caparazones';
import Caparazones2 from './pages/Caparazones2';

// Autenticación y Cuentas
import RegistroUsuario from './pages/RegistroUsuario';
import OlvidasteContrasena from './pages/OlvidasteContrasena';
import NuevaContrasena from './pages/NuevaContrasena';
import Verificar from './pages/Verificar';

// Carrito, Pedido y Seguimiento
import CarritoTortugo from './pages/CarritoTortugo';
import Pedido from './pages/Pedido';
import Pago from './pages/Pago';
import Seguimiento from './pages/Seguimiento';

// Perfil y Métodos de Pago
import Perfil from './pages/Perfil';
import MetodoActual from './pages/MetodoActual';
import EliminarMetodo from './pages/EliminarMetodo';
import IngresarTarjeta from './pages/IngresarTarjeta';

// Guías de Medidas
import MedidasHombre from './pages/MedidasHombre';
import MedidasMujeres from './pages/MedidasMujeres';

// Productos
import CamisaPrueba1 from './pages/CamisaPrueba1';
import TopMujerPrueba from './pages/TopMujerPrueba';
import BuzoHombre from './pages/BuzoHombre';
import BuzoOscuroHombre from './pages/BuzoOscuroHombre';
import BuzoOversizeMujer from './pages/BuzoOversizeMujer';
import BuzoRosaMujer from './pages/BuzoRosaMujer';
import ChaquetaMujer from './pages/ChaquetaMujer';
import ConjuntoHombreBuzoYSudadera from './pages/ConjuntoHombreBuzoYSudadera';
import FaldaMujer from './pages/FaldaMujer';
import GafasHombre from './pages/GafasHombre';
import GorraBlanca from './pages/GorraBlanca';
import JoggerMujer from './pages/JoggerMujer';
import PantalonetaCasual from './pages/PantalonetaCasual';
import TopBlanco from './pages/TopBlanco';
import VestidoDeBano from './pages/VestidoDeBano';
import ZapatosHombre from './pages/ZapatosHombre';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Rutas principales de inicio */}
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/inicio.html" element={<Inicio />} />

        {/* Login / Registro original index.html */}
        <Route path="/index" element={<Index />} />
        <Route path="/index.html" element={<Index />} />
        <Route path="/login" element={<Index />} />
        <Route path="/registrousuario" element={<RegistroUsuario />} />
        <Route path="/registrousuario.html" element={<RegistroUsuario />} />
        <Route path="/olvidastecontrasena" element={<OlvidasteContrasena />} />
        <Route path="/olvidastecontraseña" element={<OlvidasteContrasena />} />
        <Route path="/olvidastecontrasena.html" element={<OlvidasteContrasena />} />
        <Route path="/olvidastecontraseña.html" element={<OlvidasteContrasena />} />
        <Route path="/nuevacontrasena" element={<NuevaContrasena />} />
        <Route path="/nuevacontraseña" element={<NuevaContrasena />} />
        <Route path="/nuevacontrasena.html" element={<NuevaContrasena />} />
        <Route path="/nuevacontraseña.html" element={<NuevaContrasena />} />
        <Route path="/verificar" element={<Verificar />} />
        <Route path="/verificar.html" element={<Verificar />} />

        {/* Catálogos */}
        <Route path="/ultimos-drops" element={<UltimosDrops />} />
        <Route path="/ultimos-drops.html" element={<UltimosDrops />} />
        <Route path="/Ultimos-drops.html" element={<UltimosDrops />} />
        <Route path="/prendas" element={<Prendas />} />
        <Route path="/prendas.html" element={<Prendas />} />
        <Route path="/prendasmasculinas" element={<PrendasMasculinas />} />
        <Route path="/prendasmasculinas.html" element={<PrendasMasculinas />} />
        <Route path="/prendasfemeninas" element={<PrendasFemeninas />} />
        <Route path="/prendasfemeninas.html" element={<PrendasFemeninas />} />
        <Route path="/caparazones" element={<Caparazones />} />
        <Route path="/caparazones.html" element={<Caparazones />} />
        <Route path="/caparazones2" element={<Caparazones2 />} />
        <Route path="/caparazones2.html" element={<Caparazones2 />} />

        {/* Carrito, Pedido, Pago y Seguimiento */}
        <Route path="/carritotortugo" element={<CarritoTortugo />} />
        <Route path="/carritotortugo.html" element={<CarritoTortugo />} />
        <Route path="/carrito" element={<CarritoTortugo />} />
        <Route path="/carrito.html" element={<CarritoTortugo />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/pedido.html" element={<Pedido />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/pago.html" element={<Pago />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/seguimiento.html" element={<Seguimiento />} />

        {/* Perfil y Métodos de Pago */}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfil.html" element={<Perfil />} />
        <Route path="/metodo-actual" element={<MetodoActual />} />
        <Route path="/metodo-actual.html" element={<MetodoActual />} />
        <Route path="/eliminar-metodo" element={<EliminarMetodo />} />
        <Route path="/eliminar-metodo.html" element={<EliminarMetodo />} />
        <Route path="/ingresar-tarjeta" element={<IngresarTarjeta />} />
        <Route path="/ingresar-tarjeta.html" element={<IngresarTarjeta />} />

        {/* Guías de medidas */}
        <Route path="/medidashombre" element={<MedidasHombre />} />
        <Route path="/medidashombre.html" element={<MedidasHombre />} />
        <Route path="/medidasmujeres" element={<MedidasMujeres />} />
        <Route path="/medidasmujeres.html" element={<MedidasMujeres />} />
        <Route path="/medidasmujer.html" element={<MedidasMujeres />} />

        {/* Productos */}
        <Route path="/camisaprueba1" element={<CamisaPrueba1 />} />
        <Route path="/camisaprueba1.html" element={<CamisaPrueba1 />} />
        <Route path="/topmujerprueba" element={<TopMujerPrueba />} />
        <Route path="/topmujerprueba.html" element={<TopMujerPrueba />} />
        <Route path="/buzohombre" element={<BuzoHombre />} />
        <Route path="/buzohombre.html" element={<BuzoHombre />} />
        <Route path="/buzooscurohombre" element={<BuzoOscuroHombre />} />
        <Route path="/buzooscurohombre.html" element={<BuzoOscuroHombre />} />
        <Route path="/buzooversizemujer" element={<BuzoOversizeMujer />} />
        <Route path="/buzooversizemujer.html" element={<BuzoOversizeMujer />} />
        <Route path="/buzorosamujer" element={<BuzoRosaMujer />} />
        <Route path="/buzorosamujer.html" element={<BuzoRosaMujer />} />
        <Route path="/chaquetamujer" element={<ChaquetaMujer />} />
        <Route path="/chaquetamujer.html" element={<ChaquetaMujer />} />
        <Route path="/conjuntohombrebuzoysudadera" element={<ConjuntoHombreBuzoYSudadera />} />
        <Route path="/conjuntohombrebuzoysudadera.html" element={<ConjuntoHombreBuzoYSudadera />} />
        <Route path="/faldamujer" element={<FaldaMujer />} />
        <Route path="/faldamujer.html" element={<FaldaMujer />} />
        <Route path="/gafashombre" element={<GafasHombre />} />
        <Route path="/gafashombre.html" element={<GafasHombre />} />
        <Route path="/gorrablanca" element={<GorraBlanca />} />
        <Route path="/gorrablanca.html" element={<GorraBlanca />} />
        <Route path="/joggermujer" element={<JoggerMujer />} />
        <Route path="/joggermujer.html" element={<JoggerMujer />} />
        <Route path="/pantalonetacasual" element={<PantalonetaCasual />} />
        <Route path="/pantalonetacasual.html" element={<PantalonetaCasual />} />
        <Route path="/topblanco" element={<TopBlanco />} />
        <Route path="/topblanco.html" element={<TopBlanco />} />
        <Route path="/vestidodebano" element={<VestidoDeBano />} />
        <Route path="/vestidodebaño" element={<VestidoDeBano />} />
        <Route path="/vestidodebano.html" element={<VestidoDeBano />} />
        <Route path="/vestidodebaño.html" element={<VestidoDeBano />} />
        <Route path="/zapatoshombre" element={<ZapatosHombre />} />
        <Route path="/zapatoshombre.html" element={<ZapatosHombre />} />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
