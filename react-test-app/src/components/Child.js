import { Button } from 'semantic-ui-react';

export default function Child({setData}) {
    return (
        <div>
        <div>
            <Button primary onClick={() => setData("Sent from Children")}>Click Child</Button>
        </div>
        </div>
    )
}