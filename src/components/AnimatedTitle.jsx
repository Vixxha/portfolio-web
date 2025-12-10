import { TypeAnimation } from 'react-type-animation';

export default function AnimatedTitle({ text }) {
    // We can parse the text or just animate the main title.
    // For a portfolio, it's often nice to rotate roles.
    // Assuming 'text' is the static title, e.g. "Ingeniero en Formación & Desarrollador Full-Stack"

    // Let's create a sequence based on the input text.
    // If the user wants to "move words", a typewriter is the best interpretation.

    return (
        <TypeAnimation
            sequence={[
                "Ingeniero en informática",
                1500,
                "Desarrollador Full-Stack",
                1500,
                "Desarrollador Backend",
                1000,
                "Desarrollador Frontend",
                1000,
                text, // End with the full title provided
                2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        />
    );
}
