import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const PropertyConverter = () => {
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [rates, setRates] = useState({
    EUR: 0.25,
    USD: 0.27,
    CHF: 0.24,
    GBP: 0.21
  });
  const [results, setResults] = useState(null);

  const sqftToM2 = 0.092903;

  const formatNumber = (num) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPrice(value);
  };

  const handleAreaChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setArea(value);
  };

  const calculate = () => {
    if (!price || !area) return;

    const pricePerSqft = parseFloat(price) / parseFloat(area);
    const pricePerM2 = pricePerSqft / sqftToM2;

    setResults({
      EUR: {
        sqft: formatNumber((pricePerSqft * rates.EUR).toFixed(2)),
        m2: formatNumber((pricePerM2 * rates.EUR).toFixed(2))
      },
      USD: {
        sqft: formatNumber((pricePerSqft * rates.USD).toFixed(2)),
        m2: formatNumber((pricePerM2 * rates.USD).toFixed(2))
      },
      CHF: {
        sqft: formatNumber((pricePerSqft * rates.CHF).toFixed(2)),
        m2: formatNumber((pricePerM2 * rates.CHF).toFixed(2))
      },
      GBP: {
        sqft: formatNumber((pricePerSqft * rates.GBP).toFixed(2)),
        m2: formatNumber((pricePerM2 * rates.GBP).toFixed(2))
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-4 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base sm:text-lg mb-4 sm:mb-6 px-2">
          Cet outil <strong>gratuit</strong> vous aide à comparer les prix en euros, dollars, francs suisses et livres sterling.
        </p>
        
        <Card className="mb-4 sm:mb-8">
          <CardHeader className="px-3 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl font-bold">
              Convertisseur de Prix Immobilier Dubai
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Prix (AED)
                </label>
                <Input
                  type="text"
                  value={formatNumber(price)}
                  onChange={handlePriceChange}
                  placeholder="Entrez le prix en AED"
                  className="w-full text-center text-base sm:text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Surface (sqft)
                </label>
                <Input
                  type="text"
                  value={formatNumber(area)}
                  onChange={handleAreaChange}
                  placeholder="Entrez la surface en sqft"
                  className="w-full text-center text-base sm:text-lg"
                />
              </div>
            </div>
            <Button 
              onClick={calculate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-2 sm:py-3"
            >
              Convertir
            </Button>
          </CardContent>
        </Card>

        {results && (
          <Card className="mb-4 sm:mb-8 overflow-hidden">
            <CardHeader className="px-3 sm:px-6">
              <CardTitle>Résultats</CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <div className="overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="p-2 sm:p-3 text-center border text-sm sm:text-base">Devise</th>
                        {Object.keys(results).map(currency => (
                          <th key={currency} className="p-2 sm:p-3 text-center border font-bold text-sm sm:text-base">
                            {currency}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 sm:p-3 border font-medium text-sm sm:text-base">Prix/sqft</td>
                        {Object.entries(results).map(([currency, values]) => (
                          <td key={currency} className="p-2 sm:p-3 text-center border text-sm sm:text-base">
                            {values.sqft}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-2 sm:p-3 border font-medium text-sm sm:text-base">Prix/m²</td>
                        {Object.entries(results).map(([currency, values]) => (
                          <td key={currency} className="p-2 sm:p-3 text-center border text-sm sm:text-base">
                            {values.m2}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader className="px-3 sm:px-6">
            <CardTitle>Contactez-nous</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-3 sm:px-6">
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p>
                Pour aller plus loin, visitez <a href="https://laplace-dubai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">laplace-dubai.com</a> et laissez notre équipe d'experts vous guider vers <strong>le meilleur investissement au meilleur prix</strong>.
              </p>
              <p>
                Nous vous accompagnons à chaque étape, de la recherche du bien idéal à la signature finale.
              </p>
              <p>
                Dubai vous attend, et nous sommes là pour rendre votre projet simple et sécurisé. <strong>Votre avenir immobilier commence ici !</strong> 🏙️✨
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyConverter;
