#pragma strict
var width : float;
var height : float;
var depth : float;
var wallFab : GameObject;
// Materials, in order: floor, ceiling, left, right, back.
var url0 : String = "file://D:/101010-Base2/101010-2/params.txt";
var url1 : String = "file://D:/101010-Base2/101010-2/wall1.png";
var url2 : String = "file://D:/101010-Base2/101010-2/wall2.png";
var url3 : String = "file://D:/101010-Base2/101010-2/wall3.png";
var url4 : String = "file://D:/101010-Base2/101010-2/wall4.png";
var url5 : String = "file://D:/101010-Base2/101010-2/wall5.png";
function Start () {
	var www0 : WWW = new WWW (url0);
	yield www0;
	var params : String[] = www0.text.Split(' '[0]);
	height = parseFloat(params[0]);
	width = parseFloat(params[1]);
	depth = parseFloat(params[2]);
	var www1 : WWW = new WWW (url1);
	yield www1;
	var www2 : WWW = new WWW (url2);
	yield www2;
	var www3 : WWW = new WWW (url3);
	yield www3;
	var www4 : WWW = new WWW (url4);
	yield www4;
	var www5 : WWW = new WWW (url5);
	yield www5;
	// Instantiate a wall prefab five times with differing rotations/positions/scales.
	// Floor + ceiling...
	var floor : GameObject = Instantiate(wallFab, Vector3.zero, Quaternion.identity);
	floor.transform.position = new Vector3(0, 0, 0);
	floor.transform.localScale = new Vector3(width, 1, depth) / 10;
	var wallRenderer = floor.GetComponent.<Renderer>();
	wallRenderer.material.mainTexture = www1.texture;
	var ceil : GameObject = Instantiate(wallFab, new Vector3(0, height, 0), Quaternion.identity);
	ceil.transform.position = new Vector3(0, height, 0);
	ceil.transform.localScale = new Vector3(width, -1, depth) / 10;
	wallRenderer = ceil.GetComponent.<Renderer>();
	wallRenderer.material.mainTexture = www2.texture;
	// Side walls...
	var lWall : GameObject = Instantiate(wallFab, new Vector3(-width/2, height/2, 0), Quaternion.identity);
	lWall.transform.localScale = new Vector3(height, 1, depth) / 10;
	lWall.transform.Rotate(0, 0, -90);
	wallRenderer = lWall.GetComponent.<Renderer>();
	wallRenderer.material.mainTexture = www3.texture;
	var rWall : GameObject = Instantiate(wallFab, new Vector3(width/2, height/2, 0), Quaternion.identity);
	rWall.transform.localScale = new Vector3(height, 1, depth) / 10;
	rWall.transform.Rotate(0, 0, 90);
	wallRenderer = rWall.GetComponent.<Renderer>();
	wallRenderer.material.mainTexture = www4.texture;
	// Back wall...
	var bWall : GameObject = Instantiate(wallFab, new Vector3(0, height/2, depth/2), Quaternion.identity);
	bWall.transform.localScale = new Vector3(width, 1, height) / 10;
	bWall.transform.Rotate(-90, 0, 0);
	wallRenderer = bWall.GetComponent.<Renderer>();
	wallRenderer.material.mainTexture = www5.texture;
}

function Update () {

}