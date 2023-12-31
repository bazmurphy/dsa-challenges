interface Car {
  make: string;
  model: string;
  year: number;
  mileage: number;
}

interface Output {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
}

export default function analyzeCarMileage(cars: Car[]): Output {
  const totalMileage = cars.reduce((total, car) => total + car.mileage, 0);

  const averageMileage = totalMileage / cars.length;

  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0],
  );

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0],
  );

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
