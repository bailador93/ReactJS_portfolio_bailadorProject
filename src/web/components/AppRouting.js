
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppWeb } from "./AppWeb";

export const AppRouting = () => {

    return <>

        <Router>
            <Routes>

                <Route path="/*" exact={true}
                    element={<AppWeb />} />

            </Routes>
        </Router>

    </>;
}

