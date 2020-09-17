import {Button, Label, Wrapper} from "./header.styles";
import Link from 'next/link';

const Header = () => {
    return (
        <Wrapper>
            <Label>
                Blog
            </Label>
            <Label>
                Test Task for DevelopsToday
            </Label>
            <Button>
                <Link href='/posts/new'>Create new post</Link>
            </Button>
        </Wrapper>
    );
}

export default Header;