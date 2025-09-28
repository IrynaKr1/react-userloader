function getFlagEmoji(countryCode) {
  const nationalityToCountryCode = {
    AU: 'AU',
    BR: 'BR',
    CA: 'CA',
    CH: 'CH',
    DE: 'DE',
    DK: 'DK',
    ES: 'ES',
    FI: 'FI',
    FR: 'FR',
    GB: 'GB',
    IE: 'IE',
    IN: 'IN',
    IR: 'IR',
    MX: 'MX',
    NL: 'NL',
    NO: 'NO',
    NZ: 'NZ',
    RS: 'RS',
    TR: 'TR',
    UA: 'UA',
    US: 'US',
  };

  const code = nationalityToCountryCode[countryCode] || countryCode;

  if (!code || code.length !== 2) {
    return '🏳️';
  }

  const codePoints = code
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
}

export default getFlagEmoji;
