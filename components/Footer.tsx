import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">
                    Open to opportunities and collaborations
                </p>

                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div>
                    <a
                        href="https://github.com/priyanshkhandelwall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & Built by Priyansh Khandelwal
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
