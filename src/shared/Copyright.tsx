import { memo } from 'react'

export const Copyright: React.FC = memo(
    () => (
        <footer className="info">
            <p>
                Created by
                <a href="https://github.com/jp-knj">kenji</a>
            </p>
        </footer>
    ),
    () => true
)
