import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
	screenshot: string | null;
	onScreenShotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton({ screenshot, onScreenShotTook }: ScreenShotButtonProps) {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

	async function handleTakeScreenshot() {
		setIsTakingScreenshot(true);
		const canvas = await html2canvas(document.querySelector('html')!)
		const base64image = canvas.toDataURL('image/png');

		onScreenShotTook(base64image);

		setIsTakingScreenshot(false);
	}

	if (screenshot) {
		return (
			<button
				onClick={() => onScreenShotTook(null)}
				type="button"
				className="p-1 w10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
				style={{
					backgroundImage: `url(${screenshot})`,
					// excluir
					backgroundPosition: 'right bottom',
					backgroundSize: 180
					// excluir
				}
				}
			>
				<Trash weight="fill" />
			</button >
		)
	}

	return (
		<button
			onClick={handleTakeScreenshot}
			type="button"
			className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
		>
			{isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
		</button>

	)
}