import Image from "next/image";
import {
	AdvertisimentIcon,
	Analytics01Icon,
	BrandfetchIcon,
	SentIcon,
	TelephoneIcon,
	TwitterIcon,
	Video01Icon,
	WebDesign01Icon,
} from "hugeicons-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="relative">
			<section className="w-screen h-screen bg-slate-700">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-4/5  text-center text-slate-300">
						<div className="bg-orange-700 w-8 h-1 mb-4 mx-auto"></div>
						<span className="inline-block text-xl font-bold md:text-2xl mb-4">
							a weapon in the{" "}
						</span>
						<h1 className="text-6xl font-bold md:text-8xl">Digital Age.</h1>
						<Link
							href="#"
							className="px-8 py-3 md:py-2 md:px-8 bg-red-900 rounded-full mt-9 inline-block uppercase font-bold text-sm md:text-base tracking-wide"
						>
							see more
						</Link>
					</div>
				</div>
			</section>
			<section className="min-h-screen bg-red-800 text-slate-300">
				<div className="py-16  px-4 md:px-12">
					<div className="bg-orange-700 w-8 h-1 mb-4"></div>
					<h2 className="text-4xl font-bold">About us.</h2>
					<p className="text-orange-700 font-semibold text-xl">who we are</p>
					<div className="mt-4 ">
						<div className="lg:flex gap-8">
							<div className="relative mb-16">
								<p className="leading-loose">
									At Nexora Solutions, our mission is to help businesses thrive
									by crafting unique, impactful identities that stand out in the
									marketplace. We specialize in offering a full suite of
									marketing and branding services designed to enhance
									visibility, engage customers, and drive sustainable growth. By
									combining innovative strategies, creative execution, and a
									thorough understanding of each client&apos;s goals, we work
									hand-in-hand to create personalized solutions that not only
									distinguish them from competitors but also connect
									meaningfully with their target audience.
								</p>
								<Link
									href="#"
									className="px-8 py-3 md:py-2 md:px-8 md:text-base tracking-wide bg-red-900 rounded-full mt-8 inline-block uppercase font-bold text-sm"
								>
									see team
								</Link>
							</div>
							<div className="mb-16 h-60 sm:h-96 w-full lg:w-1/2 relative flex-shrink-0">
								<Image
									alt="team"
									src="/team.jpg"
									className="overflow-hidden rounded-md"
									fill={true}
								/>
							</div>
						</div>
						<div className="space-y-8 lg:flex lg:space-y-0 gap-4">
							<div>
								<h3 className="font-bold mb-4 text-xl">who are we</h3>
								<p>
									Young team of graduates wanting share our knowledge for
									business to prosper.
								</p>
							</div>
							<div>
								<h3 className="font-bold mb-4 text-xl">Our philosophy</h3>
								<p>
									Customer is always right. We never try to make things our way
									- rather listen, give advice and deliver.
								</p>
							</div>
							<div>
								<h3 className="font-bold mb-4 text-xl">How we work</h3>
								<p>
									Entirely online - you are a few business calls away from us
									enhancing your online presence.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="min-h-screen  bg-slate-800 text-slate-300">
				<div className="py-16  px-4  md:px-12">
					<div className="bg-orange-700 w-8 h-1 mb-4"></div>
					<h2 className="text-4xl font-bold">Our services.</h2>
					<p className="text-orange-700 font-semibold text-xl">
						what do we offer
					</p>
					<div className="space-y-8 mt-8 lg:grid grid-cols-3 lg:space-y-0 gap-8">
						<div className="bg-rose-500/70 p-8 rounded-lg">
							<BrandfetchIcon size={64} className="mb-8" />
							<h3 className="font-bold text-xl mb-4">Branding</h3>
							<p>
								Your brand is your identity. A logo and some colors that
								represent your goals are a must in order a customer to embed
								your product in their mind.
							</p>
						</div>
						<div className="bg-yellow-600/60 p-8 rounded-lg">
							<WebDesign01Icon size={64} className="mb-8" />
							<h3 className="font-bold text-xl mb-4">web development</h3>
							<p>
								Get yourself available on the web with a graceful informative
								website that corresponds to your style. Option for scaling into
								web app is available (examples: orders, payments, etc.).
							</p>
						</div>
						<div className="bg-rose-500/70 p-8 rounded-lg">
							<TwitterIcon size={64} className="mb-8" />
							<h3 className="font-bold text-xl mb-4">Social media</h3>
							<p>
								Influence people by your social platforms. Our young team best
								knows what is trendy and how to attract customers to your
								product/service.
							</p>
						</div>
						<div className="bg-yellow-600/60 p-8 rounded-lg">
							<AdvertisimentIcon size={64} className="mb-8" />
							<h3 className="font-bold text-xl mb-4">Advertising</h3>
							<p>
								Drag some attention on all platforms with our catchy ads. A
								guaranteed way of increasing targeted customers and let people
								know about you.
							</p>
						</div>
						<div className="bg-rose-500/70 p-8 rounded-lg">
							<Video01Icon size={64} className="mb-8" />
							<h3 className="font-bold text-xl mb-4">Content Creation</h3>
							<p>
								For advertising, for presentations, for everything. We make
								messages clear with our short movies with appealing editing and
								strong mix of music and video.
							</p>
						</div>
						<div className="bg-yellow-600/60 p-8 rounded-lg">
							<Analytics01Icon size={64} className="mb-8" />
							<h3 className="font-bold text-xl mb-4">Analysis</h3>
							<p>
								If you do not know what is suitable for you, we can advice you.
								By exploring your business, we can easily examine your target
								audience and what is the most optimal and fastest way of
								attracting them to you.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-red-400 text-slate-300">
				<div className="pt-16 pb-28 px-4  md:px-12">
					<div className="bg-orange-700 w-8 h-1 mb-4"></div>
					<h2 className="text-4xl font-bold">Team.</h2>
					<p className="text-orange-700 font-semibold text-xl">
						who are the people behind the project?
					</p>
					<div className="mt-8">
						<div className="p-8 bg-slate-800 max-w-96 flex flex-col items-center rounded-lg">
							<Image
								alt="seinlus nyongesa"
								width={200}
								height={200}
								src="/me.png"
								className="rounded-full border border-slate-700 mb-6"
							/>
							<h3 className="font-bold text-xl">Seinlus Nyongesa</h3>
							<span className="mb-4 text-orange-800">
								Developer | Technical Assistant
							</span>
							<p className="text-center">
								Bsc Computer Science | Maseno University
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="min-h-screen  bg-slate-800 text-slate-300">
				<div className="pt-16 pb-8 px-4  md:px-12">
					<div className="bg-orange-800 w-8 h-1 mb-4"></div>
					<h2 className="text-4xl font-bold">Contact us.</h2>
					<p className="text-orange-800 font-semibold text-xl">get in touch</p>
					<div className="mt-32 lg:flex gap-24">
						<div className="mb-28">
							<div className="mb-8 space-y-2">
								<SentIcon size={32} className="mb-2" />
								seinlusnyongesa@gmail.com
								<span className="block">Email</span>
							</div>
							<div className="space-y-2">
								<TelephoneIcon size={32} className="mb-2" />
								+254700547482 <span className="block">phone</span>
							</div>
						</div>
						<form className="flex-1">
							<div className="lg:flex gap-8">
								<input
									placeholder="Name"
									className="outline-none mb-12 block w-full placeholder:text-slate-100 bg-inherit border-b-2 border-slate-700 py-4 active:border-orange-800 focus:border-orange-900"
								/>
								<input
									placeholder="Email"
									className="outline-none mb-12 block w-full placeholder:text-slate-100 bg-inherit border-b-2 border-slate-700 py-4 active:border-orange-800 focus:border-orange-900"
								/>
							</div>
							<textarea
								rows={6}
								placeholder="How can we help you?"
								className="outline-none mb-4 block w-full placeholder:text-slate-100 bg-inherit border-b-2 border-slate-700 py-4 active:border-orange-800 focus:border-orange-900"
							/>
							<button className="bg-red-900 uppercase rounded-full px-6 py-2 md:py-2 md:px-8 md:text-base  mt-8">
								Submit
							</button>
						</form>
					</div>
				</div>
			</section>
			<footer className="block sticky left-0 bottom-0 w-full  -z-10">
				<div className="w-4/5 text-center my-16 mx-auto">
					<h4 className="text-3xl font-bold">Get in touch</h4>
					<p>seinlus nyongesa@gmail.com</p>
				</div>
			</footer>
		</main>
	);
}
