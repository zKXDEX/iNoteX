import SelectMenu from "@/components/Dropdown/Dropdown";

const fontsTb = [
  {
    id: 1,
    name: 'Open Sans',
    style: 'Open Sans',

  },
  {
    id: 2,
    name: 'Arial',
    style: 'Arial, sans-serif',
  },
  {
    id: 3,
    name: 'Helvetica',
    style: 'Helvetica, sans-serif',
  },
  {
    id: 4,
    name: 'Times New Roman',
    style: 'Times New Roman, serif',
  },
  {
    id: 5,
    name: 'Courier New',
    style: 'Courier New, monospace',
  },
  {
    id: 6,
    name: 'Verdana',
    style: 'Verdana, sans-serif',
  },
  {
    id: 7,
    name: 'Georgia',
    style: 'Georgia, serif',
  },
  {
    id: 8,
    name: 'Palatino',
    style: 'Palatino, serif',
  },
  {
    id: 9,
    name: 'Comic Sans MS',
    style: 'Comic Sans MS, cursive',
  },
  {
    id: 10,
    name: 'Tahoma',
    style: 'Tahoma, sans-serif',
  },
  {
    id: 11,
    name: 'Impact',
    style: 'Impact, sans-serif',
  },
  {
    id: 12,
    name: 'Arial Black',
    style: 'Arial Black, sans-serif',
  },
  {
    id: 13,
    name: 'Arial Narrow',
    style: 'Arial Narrow, sans-serif',
  },
  {
    id: 14,
    name: 'Bookman Old Style',
    style: 'Bookman Old Style, serif',
  },
  {
    id: 15,
    name: 'Century Gothic',
    style: 'Century Gothic, sans-serif',
  },
  {
    id: 16,
    name: 'Copperplate Gothic',
    style: 'Copperplate Gothic, sans-serif',
  },
];


export const ApplicationSettings = () => {
  return (
    <div className="flex flex-row items-center gap-3 mt-5 mb-10">
      <SelectMenu Option="Font " Items={fontsTb}/>
    </div>
  );
};