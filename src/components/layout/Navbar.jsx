import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ navigation }) {
    console.log('Navbar rendered');
    if (!navigation || navigation.length === 0) {
        return null;
    }


    const logoItem = navigation.find(item => item.component === 'Logo_image');

    return (
        <nav className="flex justify-between items-center p-4">
            {logoItem && (
                <div className="flex-shrink-0">
                    <Link href="/home">
                        <Image
                            src={logoItem.Image.filename}
                            alt="Logo"
                            width={200}
                            height={200}
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </Link>
                </div>
            )}
            <ul className="flex space-x-4">
                {navigation.map((item, index) => (
                    item.component !== 'Logo_image' && (
                        <li key={index} className="mx-2">
                            <Link href={item.link.cached_url}>
                                <span className="px-4 py-2 text-black text-lg hover:text-blue-700">{item.title}</span>
                            </Link>
                        </li>
                    )
                ))}
            </ul>
        </nav>
    );
}
