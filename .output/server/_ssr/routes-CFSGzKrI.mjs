import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as ShieldAlert, c as Menu, d as FileText, f as CircleUserRound, h as ArrowRight, i as ShieldCheck, l as LoaderCircle, m as Check, n as Wallet, o as Route, p as CircleCheck, r as Users, s as Radar, t as X, u as FingerprintPattern } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CFSGzKrI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var riders = [
	{
		name: "Ahmed",
		route: "Malir → PECHS",
		dist: "1.2 km away",
		delay: "1.4s"
	},
	{
		name: "Ali",
		route: "Model Colony → Saddar",
		dist: "800 m away",
		delay: "1.8s"
	},
	{
		name: "Sara",
		route: "Malir → Saddar",
		dist: "1.7 km away",
		delay: "2.2s"
	}
];
function HeroVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto w-full max-w-[440px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-2xl border bg-card shadow-float",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-52 bg-map",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 400 210",
						className: "absolute inset-0 h-full w-full",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: "stroke-map-line",
								strokeWidth: "1",
								fill: "none",
								children: [[
									30,
									75,
									120,
									165
								].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M0 ${y} L400 ${y + 12}` }, y)), [
									60,
									150,
									240,
									330
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M${x} 0 L${x - 20} 210` }, x))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M40 170 C 120 160, 150 110, 220 95 S 330 50, 365 40",
								className: "stroke-primary route-draw",
								strokeWidth: "4",
								fill: "none",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M90 190 C 130 150, 160 120, 220 95",
								className: "stroke-primary/50 route-draw",
								style: { animationDelay: "0.6s" },
								strokeWidth: "2.5",
								fill: "none",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M220 95 C 260 120, 290 140, 320 150",
								className: "stroke-foreground/30 route-draw",
								style: { animationDelay: "0.9s" },
								strokeWidth: "2.5",
								fill: "none",
								strokeLinecap: "round",
								strokeDasharray: "1000"
							}),
							[
								[40, 170],
								[90, 190],
								[320, 150]
							].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								className: "pop-in",
								style: { animationDelay: `${1.2 + i * .3}s` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: x,
									cy: y,
									r: "5",
									className: "fill-card stroke-primary",
									strokeWidth: "2.5"
								})
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "365",
								cy: "40",
								r: "6",
								className: "fill-primary pulse-ring"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "365",
								cy: "40",
								r: "6",
								className: "fill-ink"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-3 bottom-3 rounded-md bg-card/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
						children: "Malir"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute right-3 top-3 rounded-md bg-card/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
						children: "Saddar"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
							children: "Your shared ride"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-medium text-primary-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " 4 people matched"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl font-semibold tracking-tight",
						children: "Malir → Saddar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Today · 5:30 PM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: riders.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "pop-in flex items-center gap-3 rounded-lg border bg-background px-3 py-2",
							style: { animationDelay: r.delay },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-semibold text-ink-foreground",
									children: r.name[0]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: r.route
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] text-muted-foreground",
									children: r.dist
								})
							]
						}, r.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pop-in mt-4 flex items-end justify-between rounded-xl bg-ink p-4 text-ink-foreground",
						style: { animationDelay: "2.7s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest opacity-60",
							children: "One ride"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm opacity-70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-through",
								children: "Rs. 1,000"
							}), " · shared by 4"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-2xl font-semibold tracking-tight",
							children: ["Rs. 250", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-normal opacity-60",
								children: " /person"
							})]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center text-xs text-muted-foreground",
			children: "Illustrative example. Actual fares and savings vary."
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, className, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				el.classList.add("is-in");
				io.disconnect();
			}
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", className),
		children
	});
}
var nav = [
	{
		href: "#how",
		label: "How it works"
	},
	{
		href: "#example",
		label: "Example"
	},
	{
		href: "#why",
		label: "Why ShareRide"
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: "flex items-center gap-2 font-semibold tracking-tight",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "h-6 w-6",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 18 C 8 18, 10 12, 12 12 S 16 6, 20 6",
				className: "stroke-primary",
				strokeWidth: "3",
				fill: "none",
				strokeLinecap: "round"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 6 C 8 6, 10 12, 12 12",
				className: "stroke-foreground",
				strokeWidth: "3",
				fill: "none",
				strokeLinecap: "round"
			})]
		}), "ShareRide"]
	});
}
function CTA({ children = "Join the Waitlist", onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "group inline-flex h-11 items-center gap-1.5 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer",
		children: [
			children,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
		]
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xs uppercase tracking-[0.18em] text-primary-deep",
		children
	});
}
function WaitlistModal({ isOpen, onClose }) {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		whatsapp: "",
		email: ""
	});
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await fetch("https://script.google.com/macros/s/AKfycbybEJrXbQEvZtvI2P22PEnuAgcwKsmbu8zBDMtC6U8OW5c-4hLFxl6zHtCARToo0ywi/exec", {
				method: "POST",
				mode: "no-cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form)
			});
			setLoading(false);
			setSubmitted(true);
		} catch (error) {
			console.error("Error saving to sheet:", error);
			setLoading(false);
			alert("Something went wrong. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md rounded-2xl border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground",
				"aria-label": "Close modal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-2xl font-semibold tracking-tight",
						children: "You're on the list!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "We've saved your spot for Karachi launch updates. We'll reach out on WhatsApp soon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setSubmitted(false);
							setForm({
								name: "",
								whatsapp: "",
								email: ""
							});
							onClose();
						},
						className: "mt-6 inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:brightness-95",
						children: "Got it"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-widest text-primary",
							children: "Early Access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-semibold tracking-tight",
							children: "Join the ShareRide Waitlist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Be the first to split rides and save money in Karachi."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
								htmlFor: "waitlist-name",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "waitlist-name",
								type: "text",
								required: true,
								placeholder: "Ahmed Khan",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								className: "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
								htmlFor: "waitlist-whatsapp",
								children: "WhatsApp Number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "waitlist-whatsapp",
								type: "tel",
								required: true,
								placeholder: "0300 1234567",
								value: form.whatsapp,
								onChange: (e) => setForm({
									...form,
									whatsapp: e.target.value
								}),
								className: "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
								htmlFor: "waitlist-email",
								children: "Email Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "waitlist-email",
								type: "email",
								required: true,
								placeholder: "ahmed@example.com",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								className: "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:brightness-95 active:scale-[0.98] disabled:opacity-75 cursor-pointer",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Securing your spot..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Join Waitlist ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })] })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-[11px] text-muted-foreground",
					children: "Free to join · No spam ever"
				})
			] })]
		})]
	});
}
function Navbar({ onOpenWaitlist }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const f = () => setScrolled(window.scrollY > 8);
		f();
		window.addEventListener("scroll", f, { passive: true });
		return () => window.removeEventListener("scroll", f);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 transition-all ${scrolled ? "border-b bg-background/80 backdrop-blur-md" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Main",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "text-sm text-muted-foreground transition hover:text-foreground",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { onClick: onOpenWaitlist })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid h-11 w-11 place-items-center md:hidden",
					onClick: () => setOpen(!open),
					"aria-label": "Toggle menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t bg-background px-5 pb-6 pt-2 md:hidden animate-in fade-in slide-in-from-top-2",
			children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: n.href,
				onClick: () => setOpen(false),
				className: "block border-b py-4 text-lg font-medium",
				children: n.label
			}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setOpen(false);
					onOpenWaitlist();
				},
				className: "mt-5 flex h-12 w-full items-center justify-center rounded-lg bg-primary font-semibold text-primary-foreground",
				children: "Join the Waitlist"
			})]
		})]
	});
}
function ProofBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center px-5 pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative flex h-2 w-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-primary opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative h-2 w-2 rounded-full bg-primary" })]
			}), "Waitlist now open · Launching in Karachi"]
		})
	});
}
function Hero({ onOpenWaitlist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center lg:text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl",
					children: ["Don't pay for the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "whole ride."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0",
					children: "You're going somewhere. Other people are too. Share a ride with people going your way and split the cost together."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { onClick: onOpenWaitlist }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#how",
						className: "inline-flex h-11 items-center px-4 text-sm font-medium text-foreground underline-offset-4 hover:underline",
						children: "See how it works"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs text-muted-foreground",
					children: "Free to join · Launching in Karachi"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {})]
	});
}
function Aha() {
	const people = [
		{
			n: "Ahmed",
			r: "Malir → Saddar",
			d: "M20 40 C 120 40, 180 110, 300 130"
		},
		{
			n: "Ali",
			r: "Malir → PECHS",
			d: "M20 130 C 120 130, 200 130, 300 130"
		},
		{
			n: "Sara",
			r: "Model Colony → Saddar",
			d: "M20 220 C 120 220, 180 150, 300 130"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The idea" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl",
					children: "You're not the only one going that way."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 space-y-1 text-2xl font-medium leading-snug tracking-tight text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Different destinations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Same direction."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-foreground",
							children: "One shared ride."
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 480 260",
					className: "w-full",
					"aria-label": "Three routes converging into one shared ride",
					children: [
						people.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: p.d,
							className: "stroke-foreground/25 route-draw",
							style: { animationDelay: `${i * .25}s` },
							strokeWidth: "2.5",
							fill: "none",
							strokeLinecap: "round"
						}, p.n)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M300 130 L 460 130",
							className: "stroke-primary route-draw",
							style: { animationDelay: "1.4s" },
							strokeWidth: "6",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M300 130 L 460 130",
							className: "stroke-primary-foreground route-flow",
							strokeWidth: "2",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "300",
							cy: "130",
							r: "8",
							className: "fill-primary pulse-ring"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "300",
							cy: "130",
							r: "8",
							className: "fill-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "460",
							cy: "130",
							r: "6",
							className: "fill-ink"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-0",
					children: [people.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pop-in absolute left-0 -translate-y-1/2 rounded-lg border bg-background px-3 py-1.5 shadow-float",
						style: {
							top: `${[
								15.4,
								50,
								84.6
							][i]}%`,
							animationDelay: `${.4 + i * .25}s`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold",
							children: p.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: p.r
						})]
					}, p.n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pop-in absolute right-0 top-[50%] mt-6 rounded-md bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-foreground",
						style: { animationDelay: "2s" },
						children: "1 ride"
					})]
				})]
			})]
		})
	});
}
function Example() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "example",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-6xl px-5 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Real-world example" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl",
					children: "Imagine your next ride from Malir."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border bg-card p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full border-2 border-primary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 w-0.5 bg-primary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-ink" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-semibold",
											children: "Malir"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-semibold",
											children: "Saddar"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto font-mono text-xs uppercase tracking-wider text-muted-foreground",
										children: "Your trip"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground",
								children: "Overlapping routes found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: [
									"Malir → PECHS",
									"Model Colony → Saddar",
									"Malir → Saddar"
								].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "pop-in flex items-center justify-between rounded-lg border bg-background px-4 py-3",
									style: { animationDelay: `${.3 + i * .25}s` },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: r
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 text-xs text-primary-deep",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "Overlaps"]
									})]
								}, r))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between rounded-2xl bg-ink p-6 text-ink-foreground sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest opacity-50",
								children: "Instead of"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-4xl font-semibold tracking-tight opacity-50 line-through",
								children: "Rs. 1,000"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm opacity-50",
								children: "One person"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs uppercase tracking-widest text-primary",
									children: "Potentially"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-6xl font-semibold tracking-[-0.04em]",
									children: ["Rs. 250", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl font-normal opacity-60",
										children: " each"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm opacity-70",
									children: "4 people · 1 shared ride"
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "Illustrative example. Actual fares and savings vary."
				})
			]
		})
	});
}
function HowItWorks() {
	const steps = [
		["Enter your trip", "Tell us where you're going and when."],
		["Get matched", "We find people traveling along similar routes."],
		["Share the ride", "Ride together instead of booking separately."],
		["Split the fare", "Share the cost of the journey."]
	];
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const f = () => {
			const el = ref.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const p = Math.min(1, Math.max(0, (window.innerHeight * .6 - r.top) / r.height));
			setActive(Math.min(3, Math.floor(p * 4)));
		};
		f();
		window.addEventListener("scroll", f, { passive: true });
		return () => window.removeEventListener("scroll", f);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "scroll-mt-20 border-y bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How it works" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl",
					children: "Four steps. One shared ride."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref,
					className: "relative mt-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[11px] top-2 bottom-2 w-0.5 bg-border md:left-0 md:right-0 md:top-[11px] md:bottom-auto md:h-0.5 md:w-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-[11px] top-2 w-0.5 bg-primary transition-all duration-700 md:left-0 md:top-[11px] md:h-0.5 md:w-[var(--p)] h-[var(--p)]",
							style: { ["--p"]: `${active / 3 * 100}%` }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "relative grid gap-10 md:grid-cols-4 md:gap-6",
							children: steps.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-5 md:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `relative grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition-colors duration-500 ${i <= active ? "border-primary bg-primary" : "border-border bg-card"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${i <= active ? "bg-primary-foreground" : "bg-border"}` })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `transition-opacity duration-500 md:mt-6 ${i <= active ? "opacity-100" : "opacity-40"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono text-xs text-muted-foreground",
											children: ["0", i + 1]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-lg font-semibold uppercase tracking-tight",
											children: t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: d
										})
									]
								})]
							}, t))
						})
					]
				})
			]
		})
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why ShareRide" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl",
					children: "A ride works better when it's shared."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 divide-y border-y",
					children: [
						{
							i: Wallet,
							t: "Pay your share",
							d: "Don't carry the entire cost of a ride when others are heading your way."
						},
						{
							i: Radar,
							t: "Find people automatically",
							d: "You don't need to search for passengers yourself."
						},
						{
							i: Users,
							t: "Make existing rides count",
							d: "One journey can work for multiple people."
						}
					].map(({ i: Icon, t, d }, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "group grid items-center gap-4 py-8 md:grid-cols-[80px_1fr_1.2fr] md:py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-sm text-muted-foreground",
								children: ["0", idx + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-6 w-6 text-primary transition group-hover:scale-110",
										strokeWidth: 1.75
									}),
									" ",
									t
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground md:text-lg",
								children: d
							})
						]
					}, t))
				})
			]
		})
	});
}
function Safety() {
	const launch = [
		{
			i: CircleUserRound,
			t: "User profiles",
			d: "Know who you're riding with."
		},
		{
			i: Route,
			t: "Route transparency",
			d: "See every pickup and drop-off on your route."
		},
		{
			i: FileText,
			t: "Ride details",
			d: "Time, route and co-riders, shared up front."
		},
		{
			i: Radar,
			t: "Matching information",
			d: "Understand why you were matched."
		}
	];
	const planned = [{
		i: ShieldAlert,
		t: "Reporting & blocking"
	}, {
		i: FingerprintPattern,
		t: "Further verification options"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto max-w-6xl px-5 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Trust & safety" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-semibold tracking-[-0.03em]",
						children: "Designed around knowing who you ride with."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Safety-focused product design from day one. We'll be clear about what's live and what's coming."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), " Planned for launch"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2",
						children: launch.map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5 text-foreground",
									strokeWidth: 1.75
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-semibold",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: d
								})
							]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm font-semibold text-muted-foreground",
						children: "On the roadmap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: planned.map(({ i: Icon, t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), t]
						}, t))
					})
				] })]
			})
		})
	});
}
function Karachi({ onOpenWaitlist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-[0.18em] text-primary",
					children: "Karachi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl",
					children: "Karachi is full of people going the same way."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg opacity-60",
					children: "Every day, thousands travel along overlapping routes — each paying alone."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xl font-medium",
					children: "Your next ride might already have passengers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { onClick: onOpenWaitlist })
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "80 40 500 320",
				className: "w-full",
				"aria-label": "Stylized map of Karachi with overlapping routes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M90 350 C 150 330, 120 290, 180 280 S 260 330, 330 350",
						className: "stroke-ink-foreground/15",
						strokeWidth: "1.5",
						fill: "none",
						strokeDasharray: "3 5"
					}),
					[
						"M520 120 C 440 130, 360 150, 280 170",
						"M470 190 C 380 200, 260 220, 170 240",
						"M520 120 C 420 160, 280 200, 170 240",
						"M360 90 C 320 140, 300 160, 280 170",
						"M360 90 C 300 180, 200 260, 130 320",
						"M470 190 C 360 240, 220 300, 130 320"
					].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d,
						className: "stroke-primary/70 route-draw",
						style: { animationDelay: `${i * .2}s` },
						strokeWidth: "2",
						fill: "none",
						strokeLinecap: "round"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d,
						className: "stroke-primary route-flow",
						strokeWidth: "2",
						fill: "none",
						opacity: "0.5"
					})] }, i)),
					Object.entries({
						Malir: [520, 120],
						"Model Colony": [470, 190],
						Gulshan: [360, 90],
						PECHS: [280, 170],
						Saddar: [170, 240],
						Clifton: [130, 320]
					}).map(([n, [x, y]], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "pop-in",
						style: { animationDelay: `${.8 + i * .12}s` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: "5",
							className: "fill-ink stroke-ink-foreground",
							strokeWidth: "2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: x + 10,
							y: y - 8,
							className: "fill-ink-foreground font-mono text-[11px]",
							opacity: "0.75",
							children: n
						})]
					}, n))
				]
			})]
		})
	});
}
function FinalCTA({ onOpenWaitlist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "waitlist",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-semibold tracking-[-0.04em] sm:text-6xl",
					children: "Your next ride might already have passengers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-lg text-muted-foreground",
					children: "Join the ShareRide waitlist and be among the first to experience shared rides in Karachi."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex w-full justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {
						onClick: onOpenWaitlist,
						children: "Join the Waitlist"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "Free to join · No spam"
				})
			]
		})
	});
}
function Footer({ onOpenWaitlist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Share the ride. Split the cost."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-6 text-sm text-muted-foreground",
				"aria-label": "Footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#how",
						className: "hover:text-foreground",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#why",
						className: "hover:text-foreground",
						children: "Why ShareRide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onOpenWaitlist,
						className: "hover:text-foreground text-left",
						children: "Waitlist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@shareride.pk",
						className: "hover:text-foreground",
						children: "Contact"
					})
				]
			})]
		})
	});
}
function Index() {
	const [isWaitlistOpen, setIsWaitlistOpen] = (0, import_react.useState)(false);
	const handleOpen = () => setIsWaitlistOpen(true);
	const handleClose = () => setIsWaitlistOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { onOpenWaitlist: handleOpen }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onOpenWaitlist: handleOpen }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Aha, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Safety, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Karachi, { onOpenWaitlist: handleOpen }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, { onOpenWaitlist: handleOpen })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onOpenWaitlist: handleOpen }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitlistModal, {
				isOpen: isWaitlistOpen,
				onClose: handleClose
			})
		]
	});
}
//#endregion
export { Index as component };
