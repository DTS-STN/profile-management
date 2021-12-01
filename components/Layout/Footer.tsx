export const Footer = () => (
  <footer className="w-full">
    <div className="container mx-auto">
      <button className="btn btn-default mb-8">
        Report a problem or mistake on this page
      </button>
      <h6 className="h6 mb-10">
        Date modified: {new Date().toISOString().split('T')[0]}
      </h6>
    </div>
    <div className="bg-primary min-h-[182px]">
      <div className="container mx-auto">
        placeholder
        <svg
          className="absolute right-0"
          width="590"
          height="181"
          viewBox="0 0 590 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="590" height="181" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_250_905"
                transform="scale(0.00162338 0.00529167)"
              />
            </pattern>
            <image
              id="image0_250_905"
              width="616"
              height="189"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAC9CAMAAAAwXXHOAAAAe1BMVEUAAAAYJjgbKDogIDkcOTkgMDgoKEMdJzgdKDcAAAAgKTkfLj4gKDgfKjgeJjgeKjgcKDgfJzhAQEAfKzceKDgdKDcdKjcAVVUhN0MeKDceKzcAAFUdKjgcKzkeLTwaMzMdKjcfKTYZJjIcKzkaKDgcKDgYKjgbKTgYKDjo9/gwAAAAKXRSTlMASTkoCSATe/8BUCHNSWXct1sEU+D9nQMXeIoD8zYiCsN1PST/bZK221OBjhQAAA8qSURBVHgB7NVVAUNRDAWwPr5jZp5/jwMR/Us0HAgAAAAAAAAAAAAAAAAAAAAgS1U3TRt/XdNHEqiGUurReBIxLUOQSNBm88VytRa0ZIK22Zbd/iBo2Vzn8XS+hKCRqDpdr7e4PyKe11ckger9Zdc+bGULYSAMj2uZMab/Bl/mJoWXLiuvNV8HiH/PYgSGMIdmFvhjZg7NHJoZEcRtZmQEbjOj5NDMoZlDM3No1kxIidvMUlowuy2lgtltS9qE2WUlTwN2H7fGTQMkrBtqYGhBWDMhjRs7KcKaSWnc2BkOrZ8lSRujpALWMjQOW1PCmil9F8PWtNCQbzekHLamgvUSmhda9DsLWOqHmramgHUMbU+bbxLWypLGjZ3V7wraSj/FsPmm0JCHTimHzTc7YI2E5oWWjRfk0Na00AKNWOqXcmgX2ZLuj50OzUoHh/14Em1Y5NaRgSGq26HTUm/UrBubTZhDe8CiAheZQ1uPuBk0hxaPGKPNobHZciz4PjSmv2gXWOmDTQ8DduMa4KOYFFqiBQsdVXvQ3lTPZwJ+xL1IxJzbdO53w42RPUJbQACsKXsTzU6cDm3pbEec/dl4fvn+xGmMZIPQCj9D45TQlo6EgVnKDjuyfjQ/KLTSsWAAI7PLXyeCI/46480scE6cRAs+o+ln7lwDQstz1nwzDSR6cGh7EYilIV+01KtoFJpDk3bVloZ80ZZeJcBEEw7teP7QikDp1QJi+bl+Ep/NoXHrVQFZvt8Ih/a5vrJ3J8iJK0EQQCvPkplVdf8T/rBFB61vYYStMWCTMYA2b82j1Qti2A5rSuMFLcKMOwZVvQGtKhnPGmpAG0HkayIK94Vm5AY0w4xnDVSRmpNRr4moRNw3/m2nTqtZmlPsF7QXtKNjbcWvXide0A5NvqBthDIfAFq5ytnv988OrbSV+vPQKh4AGoLjH+u5obG1lWbcP68ajXFOqn9dE+31/kf/ROvhBe3VSKsXtB9oor0aaUjJeEE7LmhtpxF/ON5TqTv8gnZ7hdZlzcn4u2G9oP2TPmdXGkEtsV1/u9+JXZ/mWd0vaHuTGn8Ps7WEoy38Z2MT16u0Ur2g3dbpBJylke7uPz2+wUKA14bS2Gq+oO0MtJ0/DQ1CICj5WtE5vpoXtHb/dWi5QCMyLoeWlIwb8oJWTI048o9DY5FEIGB+7kwy/ym0mtK/ABrCtE7mgv23oUEIMBCQr54K/Hqb0A3QGAyfCy7/MDRGpDygZQTvCq0M1/vdnaBhvfJtaDGgYSz+VWhkyeEIBGHyvtAQEXBEsO4DzeuVY6CNRfxlaJKIBVqAKdwVGge0uBO05LzygnZYqKJjQAsLsRVCOro3AD4gtMJ5mfUNsBehOf5koIwFmhnmJWjQiOOo2I8Hje0YCTe/DvYitPqr0IpFNqIcKf1xaFDOvxIOaAnkq0abBRmdURfLAVLa6d8OzXOFk/KrjfYPhq8a/Rk0RAR/O7RUcyyzlS9ox0Jrd7sq+97QAMAJAPeBVhMESv2CdiC0ZmZUhSvqX0LjuF/CLnyA5rekfaeZAc6vNEjNx4BGgPF0sWOEASnDiHIgwxL+GTSP+yUp1aVTJxZoxTu0WHP+jXBEZ+AAaBLj6QLEEhphyZGMdLACljfn1iFVZta3oPEtu6ClluAODYmah8L8GNAs5RPXaBTYSkZFlCOKkSpCvNDrtOsb0Fpvae6AVlriO0BLTtBya84udgRHQmNLxXi2ZK4Ko4K5QLNHk3z71ImI/DY07YDGPvqKIe+/Sgdz8xUbFnFcG42xI6xeGhLxXGHVqjAc9glajuuh7gvtH1xtm/t7nZwaRrVFsWIz4M3QiJuGOhlPFai5LoxEvN/YDO+p0bhoI/GFSx25vJBRUuEKtGZ8P+Q7NB8AjWGpHdysNG+GBt801Il4qiw9y3PrgWySCZICKUn5CbQ0gx0Rkb2cWjjcxhL6tM7zIyLQo7jYCL6v1SVoR5YtHChGHQDNWZIqt4AUbm6juX4ztJSWko+l0LIqz3fVkvoTaNKAVpISgI33JN5CuPiezOWxEJERqSUZkIPaBc3x/djVatfuNtrlcTRfbjuyfTO0auzDv8RPd1V6BevcrbLfln2qypFS7YHm1s50MokeazxD6/bn0PK4WbY6YHjDl9uOVt06qc7eY4edlqRMM54oXJ7rikCDzYjigLbwIwufQatgB7P19VTmkPQ5tIrvp3Z/ugprOo4tqbgJrRng5VnSwUsgUHpPvmUNzbv+PmRw+TriCWfRmyyHvehaoC3mkOHiJ9Aa7Codk21oR/YGsH+sBJokbI30pE5BJDcnr0a84wLi2qMfVcSpyZHJZ/wM3yKLEfYZ2gKPkb4IbeRnoMk2D/qDi/ug5apOiiksnWK2Pw71fnYBcb1FkjDblHe/TipsxBNCay+eEmdoyIhwBhv3hzaCoz5L1vtq+5oLynFJjz8Ua/MytI3OgPe1DWZoT/kGtAo2Y7kb0FjvdwwXfwZafXz3Rh4KzRpR3QStPpxv2RegjV3YD21Ibvx6aFhwOeMMLZLLJpZ/CFqeUroUHPURn43boXnjzLmk/OEE50+hcQVtsM1fD62rGRGJGZodSyWHRkzJ46Ft5Xhobp2T+9tom52B1Bx/8MxPoeWAtjqi+cuhjZIqztCQY9o9ay62flZoqSnNPdD8BWi+XqO5sYKWV/88cgWNzwUNGilOb+UoTxMpaIPKGGHpSaGxt2wcX6NRb8m9n4+GStZ2NevyWMx2eK6S8zmheSF1AjbA1fu9iu7yVAsOaOXM0V7PsdynhXTXer9G1JnLv/pBaNYqxX3Q3N09+uZ7oGHUmPvG0WY97VVSg1OWHP20n+jtdYU2iqtrnn7D22qNP5k9QcsAhlaM5Qpw6TDUej9XzwsjOCZi0EvRWWN1PC5uM13O+jo0AhG1H+0MDXMt4vRWZ0Bd57QkMLu6q97u+lNo0TtGfEoyW3Pq2Wq0ZLVXb+PrHA651NoMdGFZ0QwN9kmHPJbrtGBUrfdvVABYlNcYY1mqgtTyWEt5EhGIwJehoVS31WhTrxMzp1ZXdXW3Pg0itSMgydbllAe0D2k+WY3GcMdiiOOSpIhJHoSIHKfXGdrN2YZ2+lYZUWN1PC7Q/C1orJJMUqs49kCDSzdnQDsgnbwATc8HLTNIogTAdqr9FljJt8gRHLPCzwctv9TcS30nRumTJOq20cXe2sHngobwtTNBV5VGjoCWPiUljT5BZfZYPf/QApyAAR8KrXk0tP0pBkvfzvNBU6XtUgIArSLeYtl2tmoN8bmGN3gBWtwPmiPC+ka6+qmgYfmrfRquFdafokNhtN2I1BTDQOlH0tXVN0IDpmXdAVqxr1RF0MWYLTWtOY1pPQP9dNBwGVpjQIvwsXhqvCyvJgNRRdB7odFlg2P5SGiVWVlVWedfvqpWt7dk9Mbez6E1OXaXlAHNqeDsOOoZT50DGtfQYgx7XIZWrrHY6ezTQvWy0/OG+ZAgu4KLdBCWigBLTYA5VsdHWFfc0BkYw3Ek0tIx0Exa8scZejPI6ZaSTqOrydUeXoEWu6FpBzQ8HrS8Bg2XqvriAKj2fN2cW0pGcN7QY0F9GhbGVOy5PL01X/af16DBhZjDjUbZMdAi1tDyvGOEY/uAFqv8KLTsR4NGtBwR7P4/tMrlqOIlaOftOb6jV9eqcWzI88IZGr8HjU6J6w2gtSfNGCHSV6FVVUk9ZexYZ1TmvbHrMrQVpXRJ5dScct4Cza0HnIJaoKljA9rAw3ECAQ6DNmagAEsFAKUGgByry49kFkmvoY2qC4kATSCQ2h/O3wY/2uvcbopUWntT1VegSfEwQc8TtD5DqwGtlsPW/6cM90DLz6GNfGt4g1qSJ7BZX/lWbkkwgjSJa52BVme936RyjW2n28hYHijKdRXakeNozAeC5p6bVyz5/1clun2SlhHuAe37NZoyO6uzDoFmWrcn17PjRUqS19DM1hKAHj0nywEta2pGje0aWfaryK5lf34JWldfh0YsRW1yHk94OGfKpbybA9pYOk+3N5ai91sOqNEYDjqgkXOvEzBLSp78NNBmJlMSGOdY30luVouFNbSoM3FIDAjB99uypgq6GRaDGsGynBGZERY9gyFWv3yyB+qmNdK0KnLynqwBeRpHQypP7VVj6ZO47wmNxLSSvWoWW8qPl7+WihHBvjBrUnbeCs1LG80Ra2g5/c/GOdWdFVEIYzl4ftXWhp6sL0KrU4HcBo1SZakjLHwCbbMLO4LI5aFWfcsMqsf7wmscOJ6yAS2yJJDQW8oEy6U7QqNV2JqX8ekE4o8X9KeEsxJrM9+Axv9/g7wGTUozgsSWMyGsnSkjIgitU7wIjVvQ3nIztMK8jZHjIcPb0HL113VwQMvWhcR9gpREbjR1x1Pqc42GiJUOS833e9tuzfnJGm1Qy9R2TGp3ENxwSeKWU+eoYSwE9kLTRWiTm+Jn0LQUMEsPBW38QpUkQdRoBEg9RnUcLOP0LC8Z9Rwk5Tu0ZeuqF7Yk8ZaUjLfUacHnDedD1EACxg3QDOvgmOnSxyQHNJ0PSNuSnUpb6dSyNvbWqmeZ9qlpUTWOmtPchLZx3DVoejRoWjLXzfW+XEMSAlKaE7ScoBVT6mF2eiUflK6q6vGgestpe1f1MW8E25cB7YeyDW1kExoHND8uNGjEYalBBi3J5ocxJsmrrkOTqM1e54PEAX07noc3Nh2XS4cFN0IbIeF6NGj+2C0zF0j8WGr48KldpTnfhVakpSRTByeD+nZyo42mJtQMH+d5xK7boY08ADQmyLkrsD1NzPpkXPRwaOsuXEAHx5n/ClpANQoSpI4OXNeg8RGhwWPYiUB//taLi9BqQOsngXZI0t6G1oTukanqfzho41ezndrOdWgsJf8eNKm8eep8qsQPhLFtaO/oJhkRXCrFdETwAjTAvwza/k7sCxozsaeAMlIX0mmjRs8rgjo0/x6aXol/HLoOuYLiHAd9NDRSAuH/2rtXI4tiIAaidizSfPKPcGvBpQ9ZrA+ZBLqGykg5YeXXpsdv7a4Rlv9nSSC0K527jgKhadw1TgCh6buSY0BodWtuSe0cENr9xlvbOSA0+V/XHceA0DROA6HptNNAaJoqh4HQ1E4CoamqZ9c5IDTVrMNAaBrHgdDuOg+E1s4DoWmcBkJTrdNAaGrngdDaT4DQ9jc/AULzM8Af2qL98u71t1EAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </div>
    </div>
    <div className="container mx-auto">
      <nav>nav items</nav>
    </div>
  </footer>
)
