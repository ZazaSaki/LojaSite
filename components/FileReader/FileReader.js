import { useEffect } from "react";
import * as XLSX from 'xlsx';
import { parseSheet } from "../../src/parseSheet";

// Reads an excel file selected in the browser
export default function FileReader({file, onLoad}) {
    useEffect(() => {
        if (!file) return;
        let cancelled = false;

        file.arrayBuffer().then((buf) => {
            if (cancelled) return;
            const wb = XLSX.read(buf);
            const List = parseSheet(wb.Sheets['Produtos']);
            if (onLoad) onLoad(List);
        }).catch((e) => console.error('could not read excel file', e));

        return () => { cancelled = true; };
    }, [file, onLoad]);

    return (<div></div>);
}
