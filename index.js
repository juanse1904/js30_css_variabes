const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
    const {value, dataset: {sizing}, name} = e.target;
    const val = `${value}${sizing || ''}`;
    document.documentElement.style.setProperty(`--${name}`, val);
    console.log(val);
};

inputs.forEach(input => input.addEventListener('change', (e) => handleUpdate(e)));
inputs.forEach(input => input.addEventListener('mousemove', (e) => handleUpdate(e)));