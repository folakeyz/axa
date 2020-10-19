import * as React from 'react';
import style from '../axa.module.scss';
import MenuBook from '@material-ui/icons/FileCopy';
const Document = () => {
return(
<div  className={style.alertNews}>
<h3>Documents</h3>
<a>
    <div className={style.docCard}>
    <div className={style.docCardLeft}>
        <h1><MenuBook /></h1>
        </div>
        <div className={style.docCardRight}>
        <h3>PRODUCT COMPENDIUM</h3>
        <p>Search for any document</p>
        </div>
    </div>
</a>



<a>
    <div className={style.docCard}>
    <div className={style.docCardLeft}>
        <h1><MenuBook /></h1>
        </div>
        <div className={style.docCardRight}>
        <h3>PRODUCT/PROPOSAL FORMS</h3>
        <p>Search for any document</p>
        </div>
    </div>
</a>



<a>
    <div className={style.docCard}>
    <div className={style.docCardLeft}>
        <h1><MenuBook /></h1>
        </div>
        <div className={style.docCardRight}>
        <h3>POLICY DOCUMENTS</h3>
        <p>Search for any document</p>
        </div>
    </div>
</a>
</div>
);
}
export default Document;