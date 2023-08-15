const getPredictedAge = async (name: string) => {
  const res = await fetch(`http//api.agify.io/name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`http//api.genderize.io/name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`http//api.nationalize.io/name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}
export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {' '}
      {/* get from url */}
      {params.name}
    </main>
  );
}
