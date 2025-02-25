"use client";

import { colorStore } from "@/store/colorStore";

export default function ResolutionOptions() {
  const { currentResolution, setResolution, setPresetResolution } = colorStore(
    (state) => state,
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Preset Selection */}
      <select
        className="w-full p-2 border rounded"
        onChange={(e) =>
          setPresetResolution(
            e.target.value as
              | "480p"
              | "720p"
              | "1080p"
              | "1440p 2K"
              | "2160p 4K"
              | "4320p 8K",
          )
        }
        defaultValue="1080p"
      >
        <option value="480p">480p</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="1440p 2K">1440p 2K</option>
        <option value="2160p 4K">2160p 4K</option>
        <option value="4320p 8K">4320p 8K</option>
      </select>

      {/* Custom Resolution Inputs */}
      <div className="flex gap-4 mt-4">
        <div>
          <label className="text-sm text-gray-600">Width</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={currentResolution.resX}
              onChange={(e) =>
                setResolution(Number(e.target.value), currentResolution.resY)
              }
              className="w-24 p-2 border rounded"
            />
            <span className="self-center">px</span>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-600">Height</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={currentResolution.resY}
              onChange={(e) =>
                setResolution(currentResolution.resX, Number(e.target.value))
              }
              className="w-24 p-2 border rounded"
            />
            <span className="self-center">px</span>
          </div>
        </div>
      </div>
    </div>
  );
}
