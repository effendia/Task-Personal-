function hitungTotalInvestasi(awal, tahun) {
  let deposito = 350000000; // 350 juta ditempatkan di deposito
  let obligasi = 0.3 * 650000000; // 30% dari 650 juta ditempatkan di obligasi
  let sahamA = 0.35 * 650000000; // 35% dari 650 juta ditempatkan di saham A
  let sahamB = 0.35 * 650000000; // Sisa 35% dari 650 juta ditempatkan di saham B

  let bungaDeposito = 3.5 / 100; // Suku bunga deposito per tahun (3.5%)
  let bungaObligasi = 13 / 100; // Suku bunga obligasi per tahun (13%)
  let bungaSahamA = 14.5 / 100; // Suku bunga saham A per tahun (14.5%)
  let bungaSahamB = 12.5 / 100; // Suku bunga saham B per tahun (12.5%)

  for (let i = 0; i < tahun; i++) {
    deposito += deposito * bungaDeposito; // Tambahkan keuntungan deposito
    obligasi += obligasi * bungaObligasi; // Tambahkan keuntungan obligasi
    sahamA += sahamA * bungaSahamA; // Tambahkan keuntungan saham A
    sahamB += sahamB * bungaSahamB; // Tambahkan keuntungan saham B
  }

  let total = deposito + obligasi + sahamA + sahamB; // total investasi setelah periode tertentu
  console.log(`Total uang setelah ${tahun} tahun: Rp${total.toLocaleString()}`);
}

hitungTotalInvestasi(1000000000, 2);

console.log(hitungTotalInvestasi);
