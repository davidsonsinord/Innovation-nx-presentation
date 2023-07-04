import {FC} from "react";
import "./JSONViewer.css"

export type JSONViewerProps = {
  url: string,
  jsonObject: string | boolean | number | object
}

export const JSONViewer: FC<JSONViewerProps> = ({url, jsonObject}) => (
  <pre><code>
          // GET {url}<br/><br/>
    {JSON.stringify(jsonObject, null, 4)}
        </code></pre>
)
