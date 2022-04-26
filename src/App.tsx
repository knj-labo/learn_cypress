import type { RouteComponentProps } from '@reach/router'

import { Layout } from './style'
import { Copyright } from './Copyright'

type Routes = '/' | '/active' | '/completed'

type Props = {
    path: Routes
}

const App: React.FC<Props & RouteComponentProps> = ({ path }) => {
    return (
        <Layout>
            <section className="todoapp">
            </section>
            <Copyright />
        </Layout>
    )
}

export default App